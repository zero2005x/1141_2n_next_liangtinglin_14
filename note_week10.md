# Week 10 上課筆記 - 期末考小抄

## 一、Next.js 基礎架構

### 1.1 App Router 架構
- Next.js 16 使用 **App Router** 架構（位於 `src/app/` 目錄）
- 每個資料夾代表一個路由段（route segment）
- `page.js` 或 `page.jsx` 定義該路由的頁面內容
- `layout.js` 定義該路由及其子路由的共用佈局

```javascript
// 基本頁面結構
export default function Page() {
  return <div>頁面內容</div>
}
```

### 1.2 路由系統
- **靜態路由**：直接使用資料夾名稱
  - `/exams/midterm/hats_14` → `src/app/exams/midterm/hats_14/page.jsx`
- **特殊資料夾**：
  - `(root)` → 群組路由，不影響 URL 路徑
  - `layout.js` → 定義共用佈局

### 1.3 Next.js 配置（next.config.mjs）
```javascript
const nextConfig = {
  reactCompiler: true,           // 啟用 React Compiler
  compiler: {
    styledComponents: true,      // 支援 styled-components
  },
  outputFileTracingRoot: process.cwd(),
};
```

## 二、React 核心概念

### 2.1 元件（Components）
**函數式元件**是現代 React 的標準寫法：

```javascript
const Product_14 = ({ pId, name, price, img_url }) => {
  return (
    <div key={pId} className="collection-item">
      <img className="image" src={img_url} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="custom-button">Add to Card</button>
    </div>
  );
};
```

### 2.2 Props（屬性傳遞）
- Props 用於父元件向子元件傳遞資料
- 使用解構賦值（destructuring）接收 props
- Props 是唯讀的，不能在子元件中修改

```javascript
// 父元件傳遞
<Product_14 
  pId={1} 
  name="Hat" 
  price={25} 
  img_url="/images/hat.png" 
/>

// 子元件接收
const Product_14 = ({ pId, name, price, img_url }) => {
  // 使用 props
}
```

### 2.3 使用 React Icons
```javascript
import { FaMap, FaGlobe } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";

// 在 JSX 中使用
<span className="flex items-center gap-1.5">
  {location}
  {location === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
</span>
```

## 三、Client vs Server Components

### 3.1 Server Components（預設）
- 在伺服器端渲染
- 可以直接存取資料庫
- 不能使用瀏覽器 API（如 `document`、`window`）
- 不能使用 hooks（useState、useEffect）

### 3.2 Client Components
- 需要在檔案頂部加上 `"use client"`
- 可以使用瀏覽器 API
- 可以使用 React hooks
- 可以處理互動事件（onClick、onChange）

```javascript
"use client";  // 必須在最上方

import { useState } from "react";

const NavbarShop_14 = () => {
  function cartToggle() {
    const dropdown = document.querySelector(".cart-dropdown");
    dropdown?.classList.toggle("show");
  }
  
  return (
    <div onClick={cartToggle}>購物車</div>
  );
};
```

### 3.3 使用時機
- **Server Component**：靜態內容、資料獲取、SEO 重要的頁面
- **Client Component**：需要互動、使用 hooks、存取瀏覽器 API

## 四、Styled-components

### 4.1 基本使用
```javascript
"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .menu-item {
    width: 30%;
    height: 240px;
    border: 1px solid black;
    
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
    
    &.large {
      height: 320px;
    }
  }
`;

export default Wrapper;
```

### 4.2 使用 Wrapper
```javascript
import Wrapper from "@/assets/wrappers/midterm/Shop_14";

const Component = () => {
  return (
    <Wrapper>
      <div className="homepage">
        內容
      </div>
    </Wrapper>
  );
};
```

### 4.3 Styled-components 特點
- **CSS-in-JS**：樣式寫在 JavaScript 中
- **區域作用域**：樣式不會互相衝突
- **動態樣式**：可以根據 props 改變樣式
- **巢狀選擇器**：支援 SCSS 語法（&、巢狀）

## 五、Next.js Link 與導航

### 5.1 使用 Link 元件
```javascript
import Link from "next/link";

// 基本使用
<Link href="/exams/midterm/hats_14" className="option">
  Shop
</Link>

// 在圖片上使用
<Link href="/" className="logo-container">
  <img src="/images/logo.svg" />
</Link>
```

### 5.2 使用 <a> 標籤（不建議）
```javascript
// 會觸發整頁重新載入
<a href="/exams/midterm/hats_14" className="content">
  <h1>HATS</h1>
</a>
```

**差異**：
- `<Link>`：SPA 路由，不重新載入頁面
- `<a>`：傳統導航，會重新載入整個頁面

## 六、Layout 系統

### 6.1 Root Layout
```javascript
// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 6.2 Nested Layout
```javascript
// src/app/exams/midterm/layout.js
import NavbarShop_14 from "@/components/midterm/NavbarShop_14";

export const metadata = {
  title: "midterm p2_14",
  description: "1141 Midterm P2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarShop_14 />
        {children}
      </body>
    </html>
  );
}
```

### 6.3 Metadata（SEO）
```javascript
export const metadata = {
  title: "頁面標題",
  description: "頁面描述",
};
```

## 七、專案結構最佳實踐

```
src/
├── app/                      # Next.js App Router
│   ├── (root)/              # 根路由群組
│   │   └── page.js          # 首頁
│   └── exams/midterm/       # 期中考試頁面
│       ├── layout.js        # 共用佈局
│       ├── page.js          # 總覽頁
│       └── hats_14/         # 子頁面
│           └── page.jsx
├── components/              # React 元件
│   ├── midterm/            # 期中考試元件
│   └── quiz1/              # 小考元件
└── assets/                 # 靜態資源
    ├── data/               # 資料檔案
    └── wrappers/           # Styled Components
```

## 八、常見模式與技巧

### 8.1 圖片處理
```javascript
// Public 資料夾中的圖片
<img src="/images/midterm/homepage/hats.png" alt="hats" />

// 使用 Next.js Image 元件（優化效能）
import Image from "next/image";
<Image src="/images/hat.png" alt="hat" width={240} height={240} />
```

### 8.2 條件渲染
```javascript
{location === "lifestyle" ? <FaMugSaucer /> : <FaGlobe />}
```

### 8.3 列表渲染
```javascript
const products = [{id: 1, name: "Hat"}, {id: 2, name: "Jacket"}];

return (
  <div>
    {products.map((product) => (
      <Product_14 key={product.id} {...product} />
    ))}
  </div>
);
```

### 8.4 事件處理
```javascript
"use client";

function handleClick() {
  console.log("clicked");
}

<button onClick={handleClick}>Click Me</button>
```

### 8.5 CSS Grid 佈局
```css
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
```

## 九、開發工作流程

### 9.1 專案啟動
```bash
npm install          # 安裝依賴
npm run dev         # 啟動開發伺服器（http://localhost:3000）
npm run build       # 建置生產版本
npm run start       # 啟動生產伺服器
```

### 9.2 重要設定檔
- `package.json`：專案依賴和腳本
- `next.config.mjs`：Next.js 配置
- `jsconfig.json`：路徑別名（`@/` → `src/`）

### 9.3 路徑別名
```javascript
// 使用 @ 代表 src 目錄
import Wrapper from "@/assets/wrappers/Shop_14";
import NavbarShop from "@/components/midterm/NavbarShop_14";
```

## 十、期末考重點提醒

### 10.1 必須記住的概念
1. ✅ **App Router 路由系統**：資料夾結構即路由
2. ✅ **Client vs Server Components**：何時使用 `"use client"`
3. ✅ **Props 傳遞**：父元件傳資料給子元件
4. ✅ **Styled-components**：CSS-in-JS 寫法
5. ✅ **Layout 系統**：共用佈局的實作
6. ✅ **Link vs a 標籤**：SPA 導航的差異

### 10.2 常見錯誤
1. ❌ 忘記在 Client Component 頂部加 `"use client"`
2. ❌ 在 Server Component 中使用瀏覽器 API
3. ❌ 使用 `<a>` 而非 `<Link>` 進行路由導航
4. ❌ 忘記在列表渲染時加 `key` 屬性
5. ❌ Styled-components 沒有加 `"use client"`

### 10.3 快速檢查清單
- [ ] 檔案是否在正確的資料夾位置？
- [ ] 是否需要 `"use client"`？
- [ ] Props 是否正確傳遞和接收？
- [ ] 圖片路徑是否正確（/images/...）？
- [ ] 是否使用 `<Link>` 而非 `<a>`？
- [ ] CSS class 名稱是否與 Wrapper 中定義的一致？

### 10.4 實用程式碼片段

**基本頁面模板**：
```javascript
export default function Page() {
  return (
    <div>
      <h1>頁面標題</h1>
      <p>內容</p>
    </div>
  );
}
```

**Client Component 模板**：
```javascript
"use client";

import { useState } from "react";

const Component = () => {
  const [state, setState] = useState(initialValue);
  
  function handleEvent() {
    // 處理邏輯
  }
  
  return (
    <div onClick={handleEvent}>
      內容
    </div>
  );
};

export default Component;
```

**Styled Component 模板**：
```javascript
"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
  }
`;

export default Wrapper;
```

## 十一、技術棧總結

本專案使用的主要技術：
- **Next.js 16.0.3**：React 框架，支援 SSR 和 App Router
- **React 19.1.1**：UI 元件庫
- **Styled-components 6.1.19**：CSS-in-JS 樣式解決方案
- **Tailwind CSS 4**：實用工具類別（utility-first）CSS 框架
- **React Icons 5.5.0**：圖示庫
- **React Router DOM 7.9.3**：客戶端路由

---

**考試加油！記得多練習實作，理解概念比背誦更重要！** 🚀
