import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between p-4">
        <span className="font-semibold">claude-nextjs-starterkit</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
