# 1141_2n_next_liangtinglin_14

淡江大學 Web 程式設計課程專案 - Next.js 應用程式

**學生**: LIANGTINGLIN (913410104)  
**課程**: 1141 Web 程式設計

## 專案簡介

本專案使用 Next.js 16 建構，包含以下功能：

- 期中考試頁面 (Midterm Exam Pages)
  - P1: 靜態商店頁面
  - P2: 商品分類頁面 (Hats, Jackets, Sneakers, Womens, Mens)
- 使用 styled-components 進行樣式管理
- 支援 React 19 與 React Compiler

## 技術棧

- **Framework**: Next.js 16.0.3
- **React**: 19.1.1
- **Styling**: styled-components, Tailwind CSS 4
- **Build Tool**: Webpack (因路徑包含中文字元，已停用 Turbopack)

## 開發指南

安裝依賴：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── (root)/            # 根路由
│   └── exams/midterm/     # 期中考試相關頁面
│       ├── p1_14/         # 問題 1
│       ├── p2_14/         # 問題 2
│       ├── hats_14/       # 帽子分類
│       ├── jackets_14/    # 夾克分類
│       ├── sneakers_14/   # 球鞋分類
│       ├── womens_14/     # 女裝分類
│       └── mens_14/       # 男裝分類
├── components/            # React 元件
│   ├── midterm/          # 期中考試元件
│   └── quiz1/            # 小考元件
└── assets/               # 靜態資源
    ├── data/             # 資料檔案
    └── wrappers/         # Styled Components

```

## 部署

### GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/zero2005x/1141_2n_next_liangtinglin_14.git
git branch -M main
git push -u origin main
```

### Vercel

1. 前往 [Vercel](https://vercel.com)
2. 匯入 GitHub 儲存庫
3. Vercel 會自動偵測 Next.js 專案並進行部署

## 已知問題

- 專案路徑包含中文字元會導致 Turbopack 錯誤，已改用 Webpack
- 檢測到多個 `package-lock.json` 檔案，已在 `next.config.mjs` 設定 `outputFileTracingRoot` 來抑制警告

## 授權

此專案為教育用途，僅供課程作業使用。
