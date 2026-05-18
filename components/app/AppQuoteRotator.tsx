"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { rotatingQuotes } from "@/lib/content"

export default function AppQuoteRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingQuotes.length)
    }, 4600)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 md:p-8 min-h-[220px]">
      <div className="text-xs uppercase tracking-[0.24em] text-white/38">Rotating Wisdom</div>

      <div className="quote-fade mt-5 min-h-[128px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            <div className="text-xl md:text-2xl text-white/84 leading-relaxed">
              “{rotatingQuotes[index].text}”
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.24em] text-white/42">
              {rotatingQuotes[index].author}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
