#!/usr/bin/env node

/**
 * 調試 Astro 內容集合讀取
 */

import { getCollection } from 'astro:content';

async function debugContent() {
  try {
    console.log('🔍 調試 Astro 內容集合...');
    
    const cryptoPosts = await getCollection('crypto');
    const btcPost = cryptoPosts.find(post => post.slug === 'btc/complete-guide');
    
    if (btcPost) {
      console.log('✅ 找到比特幣文章:');
      console.log('Slug:', btcPost.slug);
      console.log('Data keys:', Object.keys(btcPost.data));
      console.log('SEO object:', btcPost.data.seo);
      console.log('ogImage:', btcPost.data.seo?.ogImage);
    } else {
      console.log('❌ 未找到比特幣文章');
      console.log('可用的 crypto posts:', cryptoPosts.map(p => p.slug));
    }
    
  } catch (error) {
    console.error('❌ 調試失敗:', error);
  }
}

debugContent();