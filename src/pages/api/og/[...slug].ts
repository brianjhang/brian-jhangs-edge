/**
 * 動態 OG 圖片生成 API (使用 @vercel/og)
 * 基於 2024-2025 最佳實踐設計
 * 
 * 用法: /api/og/ai/llm/chatgpt-complete-guide.png?title=ChatGPT 完整指南
 */

import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';
import React from 'react';

export const config = {
  runtime: 'edge',
};

export const prerender = false;

// 主題配置
const themes = {
  ai: { 
    bg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
    primary: '#60a5fa', 
    name: 'AI小百科',
    accent: '#3b82f6'
  },
  crypto: { 
    bg: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 100%)', 
    primary: '#fbbf24', 
    name: '幣圈筆記',
    accent: '#f59e0b'
  },
  startup: { 
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)', 
    primary: '#10b981', 
    name: '創業筆記',
    accent: '#059669'
  }
};

function getThemeFromSlug(slug: string) {
  if (slug.startsWith('ai/')) return themes.ai;
  if (slug.startsWith('crypto/')) return themes.crypto;
  if (slug.startsWith('startup/')) return themes.startup;
  return themes.ai; // 預設
}

function processTitle(title: string): string[] {
  // 移除系列標記
  const cleanTitle = title.replace(/｜Brian's (AI小百科|幣圈筆記|創業筆記)$/, '');
  
  // 智慧分行邏輯
  if (cleanTitle.length <= 28) {
    return [cleanTitle];
  }
  
  const breakPoints = ['：', '｜', '、', '與', '如何', '為什麼', '的'];
  
  for (const bp of breakPoints) {
    const pos = cleanTitle.indexOf(bp);
    if (pos > 10 && pos < cleanTitle.length - 10) {
      const firstLine = cleanTitle.substring(0, pos + (bp === '：' ? 1 : 0));
      const secondLine = cleanTitle.substring(pos + (bp === '：' ? 1 : 0)).trim();
      
      if (firstLine.length <= 28 && secondLine.length <= 28) {
        return [firstLine, secondLine];
      }
    }
  }
  
  // 強制分行
  const midPoint = Math.floor(cleanTitle.length / 2);
  let breakPoint = midPoint;
  
  for (let i = midPoint; i >= midPoint - 10 && i > 0; i--) {
    if (['：', '｜', '、', '的', ' '].includes(cleanTitle[i])) {
      breakPoint = i + (cleanTitle[i] === '：' ? 1 : 0);
      break;
    }
  }
  
  return [
    cleanTitle.substring(0, breakPoint).trim(),
    cleanTitle.substring(breakPoint).trim()
  ];
}

export const GET: APIRoute = async ({ params, request }) => {
  try {
    const slug = params.slug || '';
    const url = new URL(request.url);
    const title = url.searchParams.get('title') || '預設標題';
    
    const theme = getThemeFromSlug(slug);
    const titleLines = processTitle(title);
    
    return new ImageResponse(
      React.createElement('div', {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.bg,
          fontSize: 60,
          fontWeight: 700,
          textAlign: 'center',
          position: 'relative',
        }
      }, [
        // 裝飾背景
        React.createElement('div', {
          key: 'bg',
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 40%, ${theme.primary}15 0%, transparent 50%)`,
          }
        }),
        
        // 品牌標識
        React.createElement('div', {
          key: 'brand',
          style: {
            position: 'absolute',
            top: 60,
            left: 80,
            fontSize: 24,
            color: theme.primary,
            fontWeight: 600,
          }
        }, `${theme.name} • Brian Chang`),
        
        // 主標題
        React.createElement('div', {
          key: 'title',
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: titleLines.length > 1 ? 20 : 0,
            paddingLeft: 80,
            paddingRight: 80,
          }
        }, titleLines.map((line, index) =>
          React.createElement('div', {
            key: index,
            style: {
              color: '#ffffff',
              fontSize: titleLines.length === 1 ? 72 : 64,
              lineHeight: 1.1,
              textShadow: `0 4px 8px ${theme.primary}40`,
            }
          }, line)
        )),
        
        // 底部裝飾線
        React.createElement('div', {
          key: 'decoration',
          style: {
            position: 'absolute',
            bottom: 80,
            left: 80,
            right: 80,
            height: 6,
            background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
            borderRadius: 3,
          }
        })
      ]),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    return new Response(`生成 OG 圖片失敗: ${e}`, {
      status: 500,
    });
  }
};