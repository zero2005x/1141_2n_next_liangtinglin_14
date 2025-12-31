# 1141_2n_next_liangtinglin_14

淡江大學 Web 程式設計課程專案（Next.js App Router）。

TKU Web Programming course project (Next.js App Router).

**學生 / Student**: LIANGTINGLIN (913410014)  
**課程 / Course**: 1141 Web 程式設計 / Web Programming

---

## 專案簡介 / Overview

這是一個使用 Next.js（App Router）建構的課程專案，主要內容包含：

- Midterm（期中）相關頁面與分類頁
- Demo 頁面（Blog local JSON、Shop（Node / Supabase）、Grocery）
- Tutorials（課堂範例：useState / useEffect / context）
- `styled-components` + Tailwind CSS 的混合樣式

This course project is built with Next.js (App Router) and includes:

- Midterm pages and category pages
- Demo pages (Blog local JSON, Shop (Node / Supabase), Grocery)
- Tutorials (class examples: useState / useEffect / context)
- Styling with both `styled-components` and Tailwind CSS

---

## 技術棧 / Tech Stack

- Next.js 16.x
- React 19.x
- Styling: `styled-components`, Tailwind CSS
- Backend (optional): Express + PostgreSQL (folder: `server_14/`)

---

## 開始使用 / Getting Started

### 1) 安裝依賴 / Install

```bash
npm install
```

### 2) 啟動開發模式 / Run Dev

```bash
npm run dev
```

瀏覽器開啟 / Open: http://localhost:3000

> 備註 / Note:
> `package.json` 已設定 `next dev --webpack`（部分 Windows + 中文路徑情境較穩定）。
> Dev uses webpack via `next dev --webpack` for better stability on some Windows + non-ASCII paths.

### 3) 建置與啟動 / Build & Start

```bash
npm run build
npm run start
```

---

## 主要路由 / Main Routes

以下為專案中已存在的核心頁面路由（實際路由以 `src/app` 為準）：

- `/`：首頁 / Home
- `/tutorials/t11_14`, `/tutorials/t12_14`, `/tutorials/t21_14`：教學頁 / Tutorials
- `/tutorials/context/1_propdrilling_14`, `/tutorials/context/2_context_people_14`
- `/demo/grocery_14`
- `/demo/blog_14/localjson_14`, `/demo/blog_14/localjson2_context_14`
- `/demo/shop_14/node`（含動態路由 `/demo/shop_14/node/[category]`）
- `/demo/shop_14/supa`（含動態路由 `/demo/shop_14/supa/[category]`）
- `/exams/midterm` 與：
  - `/exams/midterm/hats_14`
  - `/exams/midterm/jackets_14`
  - `/exams/midterm/mens_14`
  - `/exams/midterm/sneakers_14`
  - `/exams/midterm/womens_14`
  - `/exams/midterm/p1_14`
  - `/exams/midterm/p2_14`

These are the main routes currently implemented (source of truth is `src/app`).

---

## Navbar 對應 / Navbar Mapping

為了避免路由不一致，本專案以首頁 navbar 的配置為主（並同步整理其他 navbar）：

- 全站（Root group）使用：`src/app/(root)/layout.js` → `src/components/Navbar_14.jsx`
- Shop demo 區塊使用：`src/app/demo/shop_14/_components/NavbarSupaNode_14.jsx`
- Midterm 區塊也有獨立 navbar：`src/components/midterm/Navbar_14.jsx`

To keep routing consistent, the homepage navbar acts as the “canonical” route set and other navbars are aligned accordingly.

---

## 後端（可選）/ Backend (Optional)

資料夾 `server_14/` 是 Express + PostgreSQL 的示範後端。

`server_14/` is a demo backend built with Express + PostgreSQL.

### 啟動方式 / Run Server

```bash
cd server_14
npm install
npm run dev
```

預設埠號 / Default port: `5000`（可用 `PORT` 覆蓋 / overridable by `PORT`)

### 環境變數 / Environment Variables

- `DATABASE=LOCAL`：使用本機 PostgreSQL（預設資料庫：`wp1_demo_14`）
- `DATABASE=SUPABASE`：使用 Supabase Postgres，需設定：
  - `SUPABASE_USER`, `SUPABASE_HOST`, `SUPABASE_DATABASE`, `SUPABASE_PASSWORD`, `SUPABASE_PORT`

### API（節錄）/ API (partial)

- `GET /api/shop_14`
- `GET /api/shop_14/:category`
- `GET /api/shop_14/cart/:uid`
- `GET /api/blogs_14`

---

## 已知事項 / Notes

- `next.config.mjs` 設定了 `outputFileTracingRoot: process.cwd()` 用來抑制多 lockfile 的 tracing 警告。
- 若看到圖片 404，請確認對應圖片是否存在於 `public/images/...`。

---

## 部署 / Deployment

### GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

### Vercel

1. 前往 https://vercel.com
2. 匯入 GitHub repository
3. Vercel 會自動偵測 Next.js 並部署

---

## 授權 / License

此專案為教育用途（課程作業）/ For educational use only.
