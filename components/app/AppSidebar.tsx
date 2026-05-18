import Link from "next/link"

const navItems = [
  { label: "Overview", href: "/app" },
  { label: "Paths", href: "/#paths" },
  { label: "Wisdom", href: "/#wisdom" },
  { label: "Profound Mirror", href: "/#mirror" },
  { label: "Daily practice", href: "/app" },
]

export default function AppSidebar() {
  return (
    <aside className="glass w-full xl:w-[290px] p-5 md:p-6">
      <Link href="/" className="block text-xl font-semibold tracking-tight">
        YouAre<span className="gradient-text">Profound</span>
      </Link>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <div className="text-xs uppercase tracking-[0.24em] text-white/42">State</div>
        <div className="mt-3 text-2xl font-semibold">Clarity building</div>
        <div className="mt-2 text-white/58 leading-relaxed">
          Your practice becomes stronger when you return gently and consistently.
        </div>
      </div>

      <nav className="mt-6 grid gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-white/74 transition hover:bg-white/[0.06] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(244,114,182,0.14),rgba(255,255,255,0.03))] p-4">
        <div className="text-xs uppercase tracking-[0.24em] text-white/42">Today&apos;s reminder</div>
        <div className="mt-3 text-lg font-semibold">You do not need panic to move powerfully.</div>
      </div>
    </aside>
  )
}
