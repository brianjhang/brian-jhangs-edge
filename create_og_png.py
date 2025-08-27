from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image(title1, title2, subtitle, filename):
    # 創建圖片
    img = Image.new('RGB', (1200, 630), color='#0c0a09')
    draw = ImageDraw.Draw(img)
    
    try:
        # 嘗試使用系統字體
        title_font = ImageFont.truetype('/System/Library/Fonts/Arial.ttc', 40)
        subtitle_font = ImageFont.truetype('/System/Library/Fonts/Arial.ttc', 28)
    except:
        # 如果找不到字體，使用預設字體
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # 繪製標題
    draw.text((600, 250), title1, font=title_font, fill='white', anchor='mm')
    draw.text((600, 300), title2, font=title_font, fill='white', anchor='mm')
    
    # 繪製副標題
    draw.text((600, 430), subtitle, font=subtitle_font, fill='#fbbf24', anchor='mm')
    
    # 繪製底部裝飾線
    draw.rectangle([(0, 622), (1200, 630)], fill='#fbbf24')
    
    # 儲存圖片
    output_path = f'/Users/brian/Documents/AI/brian-jhangs-edge/public/images/og/crypto/{filename}'
    img.save(output_path, 'PNG', quality=95)
    print(f'Created: {filename}')

# 創建比特幣 OG 圖
create_og_image(
    '比特幣完全指南：',
    '從中本聰白皮書到 2025 年投資策略',
    "Brian's 幣圈筆記",
    'bitcoin-complete-guide.png'
)

print('Bitcoin OG image created successfully!')