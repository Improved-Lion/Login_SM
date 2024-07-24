# React - Typescript 개발 세팅

## 프로젝트 생성

```sh
cd workspace

npm init vite@latest todo-ts

Select a framework: » React
Select a variant: » TypeScript

cd todo-ts
npm i
npm run dev
```

## vite.config.ts 설정

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@recoil', replacement: '/src/recoil' },
      { find: '@zustand', replacement: '/src/zustand' },
      { find: '#types', replacement: '/src/types' },
    ],
  },
});
```

## tsconfig.app.json 설정 (절대경로)

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@pages/*": ["src/pages/*"],
      "@recoil/*": ["src/recoil/*"],
      "@zustand/*": ["src/zustand/*"],
      "#types/*": ["src/types/*"]
    },

    ...... (기본설정)

    /* 추가 설정 */
    "allowJs": true // 자바스크립트 파일을 타입스크립트 프로젝트에 포함
    // "checkJs": true, // 자바스크립트 파일에 대한 타입체크 활성화
  },
  "include": ["src", "src/vite-env.d.ts"] // vite에서 제공하는 import.meta.env 등의 클라이언트용 타입 추가
}

```

## 스타일 적용

### tailwind 설치

```sh
cd workspace/community/js
npm install -D tailwindcss postcss autoprefixer
```

### 설정 파일 생성

- tailwind.config.js
- postcss.config.js(-p 옵션으로 생성)

```sh
npx tailwindcss init -p

```

### 설정 파일 수정

- tailwind.config.js
  - tailwindcss를 적용할 대상 확장자 지정

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### tailwind css 지시어 추가

- src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 지시어 경고 수정
  - VSCode가 @tailwind 키워드를 인식할 수 없어서 경고 발생할 경우
  - VScode 설정에서 unknown at rules 검색 후 CSS > Lint: Unknown At Rules를 Ignore로 변경

## index.html <head> 부분 수정

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tuna Study</title>

  <!-- 기본 meta 태그 -->
  <meta name="description" content="다양한 기능들을 구현하며 내것으로 만든다." />
  <meta name="keywords" content="커뮤니티, 소통, 포럼, 관심사, 온라인 모임, 커뮤니티 서비스" />
  <meta name="author" content="SM" />

  <!-- Open Graph meta 태그 (소셜 미디어용) -->
  <meta property="og:title" content="반갑습니다. 나의 기능입니다." />
  <meta property="og:description" content="유용한 정보를 나누고 공유해요." />
  <meta property="og:image" content="/images/fesp.webp" />
  <meta property="og:url" content="https://community.fesp.shop" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SM컴" />
</head>
```

## 추가 패키지 설치

```sh
npm i react-router-dom react-hook-form recoil recoil-persist zustand @tanstack/react-query @tanstack/react-query-devtools react-spinners
```

## 페이지 구조 (미완)

## 공용 타입 설정 파일 작성 (미완)
