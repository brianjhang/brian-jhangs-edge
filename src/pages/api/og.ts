import { ImageResponse } from '@vercel/og'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || '文章標題'
    const series = searchParams.get('series') || 'ai'
    
    // 簡單的主題配色
    const themes = {
      ai: { bg: '#0f172a', primary: '#60a5fa', emoji: '🤖', name: 'AI小百科' },
      crypto: { bg: '#0c0a09', primary: '#fbbf24', emoji: '💰', name: '幣圈筆記' },
      startup: { bg: '#0a0a0a', primary: '#f97316', emoji: '🚀', name: '創業筆記' }
    }
    
    const theme = themes[series as keyof typeof themes] || themes.ai
    
    return new ImageResponse(
      (
        <div
          style={{
            background: theme.bg,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* 大 emoji */}
          <div style={{ fontSize: '120px', marginBottom: '40px' }}>
            {theme.emoji}
          </div>
          
          {/* 文章標題 */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: '1.2',
              marginBottom: '30px',
              maxWidth: '80%',
            }}
          >
            {title}
          </div>
          
          {/* 系列名稱 */}
          <div
            style={{
              fontSize: '32px',
              color: theme.primary,
              fontWeight: '600',
            }}
          >
            Brian's {theme.name}
          </div>
          
          {/* 底部裝飾線 */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '8px',
              background: theme.primary,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`Failed to generate the image: ${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}