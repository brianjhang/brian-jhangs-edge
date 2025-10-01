#!/usr/bin/env node

/**
 * 建置效能監控工具
 * 追蹤 Astro 建置時間、記憶體使用、輸出檔案大小等指標
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile, writeFile, mkdir, readdir } from 'fs/promises';
import { existsSync, statSync } from 'fs';
import { join } from 'path';

const execAsync = promisify(exec);

const METRICS_DIR = 'build-metrics';
const METRICS_FILE = join(METRICS_DIR, 'build-history.json');

/**
 * 獲取目錄大小
 */
async function getDirectorySize(dirPath) {
  if (!existsSync(dirPath)) return 0;

  let totalSize = 0;

  async function calculateSize(path) {
    const stats = statSync(path);
    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      const files = await readdir(path);
      for (const file of files) {
        await calculateSize(join(path, file));
      }
    }
  }

  await calculateSize(dirPath);
  return totalSize;
}

/**
 * 格式化檔案大小
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * 執行建置並測量效能
 */
async function measureBuildPerformance() {
  console.log('🚀 開始建置效能測量...\n');

  const startTime = Date.now();
  const startMemory = process.memoryUsage();

  try {
    // 執行建置
    const { stdout, stderr } = await execAsync('npm run build', {
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer
    });

    const endTime = Date.now();
    const endMemory = process.memoryUsage();
    const buildTime = (endTime - startTime) / 1000; // 秒

    // 計算輸出大小
    const distSize = await getDirectorySize('dist');
    const clientSize = await getDirectorySize('dist/client');
    const serverSize = await getDirectorySize('dist/server');

    // 從輸出中提取頁面數量
    const pagesMatch = stdout.match(/📄 Pages generated: (\d+)/);
    const pagesGenerated = pagesMatch ? parseInt(pagesMatch[1]) : 0;

    const metrics = {
      timestamp: new Date().toISOString(),
      buildTime: parseFloat(buildTime.toFixed(2)),
      pagesGenerated,
      outputSize: {
        total: distSize,
        client: clientSize,
        server: serverSize,
        totalFormatted: formatBytes(distSize),
        clientFormatted: formatBytes(clientSize),
        serverFormatted: formatBytes(serverSize)
      },
      memory: {
        heapUsed: endMemory.heapUsed - startMemory.heapUsed,
        heapUsedFormatted: formatBytes(endMemory.heapUsed - startMemory.heapUsed),
        rss: Math.abs(endMemory.rss - startMemory.rss),
        rssFormatted: formatBytes(Math.abs(endMemory.rss - startMemory.rss))
      },
      performance: {
        avgTimePerPage: pagesGenerated > 0 ? (buildTime / pagesGenerated).toFixed(3) : 0,
        pagesPerSecond: pagesGenerated > 0 ? (pagesGenerated / buildTime).toFixed(2) : 0
      }
    };

    // 儲存歷史記錄
    await saveBuildMetrics(metrics);

    // 顯示報告
    displayReport(metrics);

    return metrics;

  } catch (error) {
    console.error('❌ 建置失敗:', error.message);
    process.exit(1);
  }
}

/**
 * 儲存建置指標
 */
async function saveBuildMetrics(metrics) {
  // 確保目錄存在
  if (!existsSync(METRICS_DIR)) {
    await mkdir(METRICS_DIR, { recursive: true });
  }

  // 讀取歷史記錄
  let history = [];
  if (existsSync(METRICS_FILE)) {
    const data = await readFile(METRICS_FILE, 'utf-8');
    history = JSON.parse(data);
  }

  // 添加新記錄
  history.push(metrics);

  // 保留最近 50 筆記錄
  if (history.length > 50) {
    history = history.slice(-50);
  }

  // 寫入檔案
  await writeFile(METRICS_FILE, JSON.stringify(history, null, 2));
}

/**
 * 顯示報告
 */
function displayReport(metrics) {
  console.log('\n📊 建置效能報告');
  console.log('='.repeat(50));
  console.log(`⏰ 建置時間: ${new Date(metrics.timestamp).toLocaleString('zh-TW')}`);
  console.log(`\n⚡ 建置效能:`);
  console.log(`   總時間: ${metrics.buildTime}s`);
  console.log(`   頁面數量: ${metrics.pagesGenerated}`);
  console.log(`   平均每頁: ${metrics.performance.avgTimePerPage}s`);
  console.log(`   建置速度: ${metrics.performance.pagesPerSecond} 頁/秒`);

  console.log(`\n💾 輸出大小:`);
  console.log(`   總大小: ${metrics.outputSize.totalFormatted}`);
  console.log(`   客戶端: ${metrics.outputSize.clientFormatted}`);
  console.log(`   伺服器: ${metrics.outputSize.serverFormatted}`);

  console.log(`\n🧠 記憶體使用:`);
  console.log(`   Heap 增長: ${metrics.memory.heapUsedFormatted}`);
  console.log(`   RSS 增長: ${metrics.memory.rssFormatted}`);

  // 與歷史平均值比較
  compareWithHistory(metrics);

  console.log('='.repeat(50));
}

/**
 * 與歷史記錄比較
 */
async function compareWithHistory(currentMetrics) {
  if (!existsSync(METRICS_FILE)) return;

  const data = await readFile(METRICS_FILE, 'utf-8');
  const history = JSON.parse(data);

  if (history.length < 2) return;

  // 計算最近 10 次的平均值
  const recent = history.slice(-11, -1); // 不包含當前這次
  const avgBuildTime = recent.reduce((sum, m) => sum + m.buildTime, 0) / recent.length;
  const avgOutputSize = recent.reduce((sum, m) => sum + m.outputSize.total, 0) / recent.length;

  const buildTimeDiff = ((currentMetrics.buildTime - avgBuildTime) / avgBuildTime * 100).toFixed(1);
  const outputSizeDiff = ((currentMetrics.outputSize.total - avgOutputSize) / avgOutputSize * 100).toFixed(1);

  console.log(`\n📈 與歷史平均值比較 (最近 10 次):`);
  console.log(`   建置時間: ${buildTimeDiff > 0 ? '+' : ''}${buildTimeDiff}% ${getTrendEmoji(buildTimeDiff, true)}`);
  console.log(`   輸出大小: ${outputSizeDiff > 0 ? '+' : ''}${outputSizeDiff}% ${getTrendEmoji(outputSizeDiff, false)}`);

  // 警告
  if (Math.abs(buildTimeDiff) > 20) {
    console.log(`\n⚠️  建置時間變化超過 20%，請檢查最近的變更`);
  }
  if (Math.abs(outputSizeDiff) > 15) {
    console.log(`\n⚠️  輸出大小變化超過 15%，請檢查資源優化`);
  }
}

/**
 * 獲取趨勢 emoji
 */
function getTrendEmoji(diff, lowerIsBetter = true) {
  const threshold = 5;
  if (Math.abs(diff) < threshold) return '➡️';

  const isImprovement = lowerIsBetter ? diff < 0 : diff > 0;
  return isImprovement ? '📈' : '📉';
}

/**
 * 主函數
 */
async function main() {
  await measureBuildPerformance();
}

main().catch(console.error);
