# 별내목수 Next.js 홈페이지

원본 HTML 원페이지 디자인을 바탕으로 만든 Next.js App Router 프로젝트입니다.

## 페이지 구조

- `/` 홈
- `/about` 회사소개
- `/service` 서비스 안내
- `/portfolio` 시공사례
- `/blog` 시공일지/블로그
- `/contact` 문의하기

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인합니다.

## 배포 방법: Vercel 추천

1. GitHub에 이 폴더를 업로드합니다.
2. Vercel에서 New Project를 누릅니다.
3. 해당 GitHub 저장소를 선택합니다.
4. Framework Preset은 Next.js로 자동 인식됩니다.
5. Deploy를 누릅니다.
6. 도메인 구입 후 Vercel Project > Settings > Domains에서 연결합니다.

## 수정 위치

- 공통 정보: `lib/site-data.ts`
- 전체 디자인: `app/globals.css`
- 메뉴/푸터: `components/Header.tsx`, `components/Footer.tsx`
- 각 페이지: `app/*/page.tsx`
- 이미지: `public/images/`
