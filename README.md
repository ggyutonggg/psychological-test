# 心理測驗應用

這是一個移動端友好的心理測驗應用，包含6個問題和4個結果選項。

## 功能特點

- 📱 移動端優化設計，適配手機屏幕
- 🎨 美觀的UI界面，使用自定義背景圖片
- 🔄 流暢的界面轉換動畫
- 📊 智能結果分析，統計選擇最多的選項
- ⏱️ 3秒載入動畫
- 🔙 支持返回和重置功能

## 界面流程

1. **介面一（介紹頁）**: 使用 `bunny_intro_background.png` 背景 + `bunny_btn_start.png` 按鈕
2. **介面二-七（問題頁）**: 使用 `bunny_ques _background.png` 背景 + 對應的問題圖片 + `bunny_btn_back.png` 返回按鈕
3. **介面八（載入頁）**: 使用 `bunny_loading_background.png` 背景，顯示3秒
4. **介面九-十二（結果頁）**: 使用對應的結果背景圖片 + `bunny_btn_reset.png` 重置按鈕

## 圖片文件要求

請確保以下圖片文件存在於 `public/img/` 目錄中：

### 背景圖片
- `bunny_intro_background.png` - 介紹頁背景
- `bunny_ques _background.png` - 問題頁背景
- `bunny_loading_background.png` - 載入頁背景
- `bunny_result_B_backgroud.png` - 結果B背景
- `bunny_result_C_backgroud.png` - 結果C背景
- `bunny_result_D_backgroud.png` - 結果D背景
- 注意：結果A沒有背景圖片，使用漸變背景

### 問題圖片
- `bunny_ques_1.png` - 第一題
- `bunny_ques_2.png` - 第二題
- `bunny_ques_3.png` - 第三題
- `bunny_ques_4.png` - 第四題
- `bunny_ques_5.png` - 第五題
- `bunny_ques_6.png` - 第六題

### 結果圖片
- `bunny_result_A_bunny.png` - 結果A的bunny圖片
- `bunny_result_B_bunny.png` - 結果B的bunny圖片
- `bunny_result_C_bunny.png` - 結果C的bunny圖片
- `bunny_result_D_bunny.png` - 結果D的bunny圖片

### UI按鈕
- `bunny_btn_start.png` - 開始按鈕
- `bunny_btn_back.png` - 返回按鈕
- `bunny_btn_reset.png` - 重置按鈕

## 安裝和運行

```bash
# 安裝依賴
npm install

# 開發模式運行
npm run dev

# 構建生產版本
npm run build

# 運行生產版本
npm start
```

## 技術棧

- **框架**: Next.js 15
- **樣式**: Tailwind CSS 4
- **圖片優化**: Next.js Image 組件
- **狀態管理**: React Hooks

## 注意事項

- 應用設計為移動端優先，建議在手機或瀏覽器開發者工具的移動端模式下測試
- 圖片文件需要正確放置在 `public/img/` 目錄中
- 確保圖片文件名與代碼中的路徑完全匹配（包含 `bunny_` 前綴）

## 問題排查

如果圖片無法顯示，請檢查：
1. 圖片文件是否存在於正確的目錄
2. 文件名是否正確（包括 `bunny_` 前綴）
3. 文件格式是否為PNG
4. 是否有macOS系統文件（`._` 前綴）干擾

## 移動框架

應用使用移動框架設計，適配一般手機尺寸（1920x1080），提供最佳的移動端體驗。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
