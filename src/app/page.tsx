import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b p-4">
        <span className="font-semibold">claude-nextjs-starterkit</span>
        <ThemeToggle />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <Badge variant="secondary">Next.js 15 · TypeScript · Tailwind v4</Badge>
        <h1 className="text-3xl font-bold tracking-tight">
          웹개발을 빠르게 시작하세요
        </h1>
        <p className="text-muted-foreground max-w-md">
          shadcn/ui 컴포넌트, lucide-react 아이콘, 다크모드가 이미 설정된
          스타터킷입니다.
        </p>
        <Button>시작하기</Button>
      </main>
    </div>
  )
}
