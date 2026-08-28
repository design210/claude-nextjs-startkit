# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 기본 규칙

- 커밋 메세지 : 한글로 작성
- 주석 : 한글로 작성
- 함수명/변수명 : camelCase 형태로 영문으로 작성

## Commands

```bash
npm run dev          # 개발 서버 (Turbopack)
npm run build         # 프로덕션 빌드 (Turbopack)
npm run start          # 프로덕션 서버
npm run lint            # ESLint 검사
npm run format         # Prettier 포맷팅 (prettier-plugin-tailwindcss로 클래스 순서 정렬)
npm run format:check   # 포맷팅 검사만
npx shadcn@latest add <component-name>   # shadcn/ui 컴포넌트 추가
```

테스트 스크립트는 아직 구성되어 있지 않다.

## Architecture

Next.js 15 App Router + TypeScript + Tailwind CSS v4 + shadcn/ui 스타터킷.

- **App Router 구조**: `src/app/layout.tsx`가 루트 레이아웃으로, `ThemeProvider`(next-themes) → `Header`/`main`/`Footer`를 감싸는 flex 컬럼 레이아웃을 구성한다. `Header`와 `Footer`는 둘 다 `fixed`로 화면 상/하단에 고정되므로, `main`에는 그만큼(`pt-16 pb-[100px]`)의 padding이 항상 함께 유지되어야 콘텐츠가 가려지지 않는다.
- **Header/Footer는 공통 레이아웃 컴포넌트**: `src/components/header.tsx`, `src/components/footer.tsx`. 두 컴포넌트 모두 바깥 `<header>`/`<footer>`는 화면 전체 너비(테두리·배경)를 유지하고, 내부 콘텐츠만 `max-w-[1920px] mx-auto`로 감싸 큰 모니터에서 중앙 정렬되도록 되어 있다. 새 페이지를 추가해도 이 레이아웃은 `layout.tsx`를 통해 공통으로 적용된다.
- **테마 관리 (next-themes)**: `src/components/theme-provider.tsx`가 `next-themes`의 `ThemeProvider`를 감싸고, `layout.tsx`에서 `attribute="class"`로 설정한다. 다크 모드는 `<html>`에 `class="dark"`를 토글하는 방식이며, 선택한 테마는 `next-themes`가 자동으로 `localStorage`(`theme` 키)에 저장/복원한다 (별도 저장 코드 불필요). `src/components/theme-toggle.tsx`는 라이트/다크만 지원하는 단순 토글 버튼이다(시스템 모드 없음, `resolvedTheme` 기준으로 전환).
- **shadcn/ui 설정**: `components.json` 기준 style은 `radix-nova`, baseColor `neutral`, CSS 변수 사용, prefix 없음. shadcn 컴포넌트는 `src/components/ui/`에 위치하며 CLI로 추가/수정한다. 아이콘은 `lucide-react`를 쓰되, 상표 문제로 브랜드 아이콘(GitHub 등)이 없는 경우 `src/components/footer.tsx`처럼 인라인 SVG로 직접 정의해서 대체한다.
- **Tailwind v4, config 파일 없음**: `src/app/globals.css`에서 `@theme inline` 블록으로 디자인 토큰(색상, radius 등)을 정의한다. 색상은 oklch 기반이며 `--color-*` 변수가 `bg-background`, `text-muted-foreground` 같은 유틸리티 클래스에 매핑된다. 다크 모드 variant는 `@custom-variant dark (&:is(.dark *))`로 커스텀 정의되어 있다.
- **환경변수**: `.env.example`을 참고해 `.env.local`을 작성한다. `src/lib/env.ts`에서 zod로 클라이언트 환경변수(`NEXT_PUBLIC_APP_URL` 등)를 파싱/검증한다. 이 검증은 import 시점에 즉시 실행되므로, 필요한 환경변수가 없으면 빌드/런타임에 바로 실패한다.
- **경로 별칭**: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`(`cn()` 헬퍼), `@/hooks` (`components.json`의 `aliases` 기준).

## 폴더 구조

```
src/
  app/            # 라우트 및 페이지 (layout.tsx에 Header/Footer 포함)
  components/
    ui/           # shadcn/ui 컴포넌트
    header.tsx / footer.tsx
    theme-provider.tsx / theme-toggle.tsx
  lib/
    utils.ts      # cn() 유틸
    env.ts        # 환경변수 zod 검증
  hooks/          # 커스텀 훅
  types/          # 공용 타입 정의
```
