"use client"

import { motion } from "framer-motion"

export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="hero-glow" />
      <div className="grid-overlay" />

      <motion.div
        className="ambient-dot"
        style={{
          width: 420,
          height: 420,
          left: "-6%",
          top: "12%",
          background: "rgba(59,130,246,0.22)",
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="ambient-dot"
        style={{
          width: 360,
          height: 360,
          right: "-4%",
          top: "8%",
          background: "rgba(244,114,182,0.2)",
        }}
        animate={{ x: [0, -26, 12, 0], y: [0, 24, -14, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="ambient-dot"
        style={{
          width: 340,
          height: 340,
          left: "38%",
          bottom: "6%",
          background: "rgba(251,146,60,0.16)",
        }}
        animate={{ x: [0, 18, -22, 0], y: [0, -28, 10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
