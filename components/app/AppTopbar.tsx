import Link from "next/link"

export default function AppTopbar() {
  return (
    <div className="glass px-4 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <div className="text-xs uppercase tracking-[0.24em] text-white/42">Dashboard</div>
        <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
          Welcome back to your inner operating system.
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          1 daily insight
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          1 reflection prompt
        </div>
        <Link href="/#mirror" className="button-primary text-sm px-5 py-3">
          Open mirror
        </Link>
      </div>
    </div>
  )
}
