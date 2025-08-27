from PIL import Image, ImageDraw, ImageFont
import os

def create_bitcoin_og_image():
    # 創建圖片
    img = Image.new('RGB', (1200, 630), color='#0c0a09')
    draw = ImageDraw.Draw(img)
    
    # 嘗試多種中文字體路徑
    font_paths = [
        '/System/Library/Fonts/PingFang.ttc',  # macOS 預設中文字體
        '/System/Library/Fonts/Hiragino Sans GB.ttc',  # 另一個 macOS 中文字體
        '/System/Library/Fonts/Arial Unicode MS.ttf',  # 支援中文的 Arial
        '/System/Library/Fonts/STHeiti Light.ttc',  # 黑體
    ]
    
    title_font = None
    subtitle_font = None
    
    # 嘗試載入中文字體
    for font_path in font_paths:
        try:
            if os.path.exists(font_path):
                title_font = ImageFont.truetype(font_path, 48)  # 增大字體
                subtitle_font = ImageFont.truetype(font_path, 32)  # 增大字體
                print(f"使用字體: {font_path}")
                break
        except Exception as e:
            print(f"無法載入字體 {font_path}: {e}")
            continue
    
    # 如果找不到合適字體，使用預設字體
    if title_font is None:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        print("使用預設字體")
    
    # 繪製標題 - 調整位置更居中
    draw.text((600, 220), '比特幣完全指南', font=title_font, fill='white', anchor='mm')
    draw.text((600, 290), '從中本聰白皮書到 2025 年投資策略', font=title_font, fill='white', anchor='mm')
    
    # 繪製副標題
    draw.text((600, 420), "Brian's 幣圈筆記", font=subtitle_font, fill='#fbbf24', anchor='mm')
    
    # 繪製底部裝飾線
    draw.rectangle([(0, 622), (1200, 630)], fill='#fbbf24')
    
    # 儲存圖片
    output_path = '/Users/brian/Documents/AI/brian-jhangs-edge/public/images/og/crypto/bitcoin-complete-guide.png'
    img.save(output_path, 'PNG', quality=95)
    print(f'已創建: bitcoin-complete-guide.png')
    return output_path

if __name__ == "__main__":
    create_bitcoin_og_image()
    print('比特幣 OG 圖創建完成！')