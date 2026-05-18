"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { rotatingQuotes } from "@/lib/content"

export default function QuoteEngine() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingQuotes.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="quote-fade min-h-[124px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-center max-w-3xl px-4"
        >
          <p className="text-xl md:text-3xl leading-relaxed text-white/84">
            “{rotatingQuotes[index].text}”
          </p>
          <div className="mt-4 text-sm uppercase tracking-[0.26em] text-white/42">
            {rotatingQuotes[index].author}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
