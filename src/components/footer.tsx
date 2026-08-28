import Image from "next/image"
import Link from "next/link"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-[100px] border-t bg-background">
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between px-4">
        <Image src="/next.svg" alt="Next.js" width={80} height={16} className="dark:invert" />
        <div className="flex flex-col items-end justify-center gap-1">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>&copy; 2026 claude-nextjs-starterkit</span>
            <Link href="#" className="hover:text-foreground">
              문서
            </Link>
            <Link href="#" className="hover:text-foreground">
              이용약관
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com" aria-label="GitHub">
              <GithubIcon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
