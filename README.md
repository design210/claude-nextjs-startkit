# claude-nextjs-starterkit

웹개발을 빠르게 시작하기 위한 Next.js 스타터킷입니다.

## 기술 스택

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (config 파일 없이 `@theme` 방식)
- [shadcn/ui](https://ui.shadcn.com/) (New York / radix 스타일)
- [lucide-react](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes) (다크모드)
- [zod](https://zod.dev/) (환경변수/스키마 검증)
- ESLint + Prettier (`prettier-plugin-tailwindcss` 포함)

## 시작하기

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## 스크립트

| 명령어                 | 설명                       |
| ---------------------- | -------------------------- |
| `npm run dev`          | 개발 서버 실행 (Turbopack) |
| `npm run build`        | 프로덕션 빌드              |
| `npm run start`        | 프로덕션 서버 실행         |
| `npm run lint`         | ESLint 검사                |
| `npm run format`       | Prettier로 코드 포맷팅     |
| `npm run format:check` | 포맷팅 검사만 수행         |

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <component-name>
```

## 폴더 구조

```
src/
  app/            # 라우트 및 페이지
  components/
    ui/           # shadcn/ui 컴포넌트
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    utils.ts      # cn() 유틸
    env.ts        # 환경변수 zod 검증
  hooks/          # 커스텀 훅
  types/          # 공용 타입 정의
```

## 환경변수

`.env.example`을 참고해 `.env.local`을 작성하세요. `src/lib/env.ts`에서 zod로 검증합니다.
