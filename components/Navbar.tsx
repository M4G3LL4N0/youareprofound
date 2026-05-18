"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const links = [
  { label: "Paths", href: "#paths" },
  { label: "Wisdom", href: "#wisdom" },
  { label: "Mirror", href: "#mirror" },
  { label: "Experience", href: "#experience" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-4 z-50 section-shell"
    >
      <div className="glass px-4 py-3 md:px-6 md:py-4 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight">
          YouAre<span className="gradient-text">Profound</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/68">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="md:hidden rounded-full border border-white/12 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/70"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
          <Link href="/app" className="button-primary text-sm px-5 py-3">
            Begin your path
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mt-2 glass px-4 py-3"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-white/75 hover:bg-white/[0.06]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <p className="px-3 pt-2 text-[11px] leading-relaxed text-white/45">
                Reflection and growth prompts for personal exploration — not therapy, crisis care, or medical advice.
              </p>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
