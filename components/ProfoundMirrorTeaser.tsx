"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProfoundMirrorTeaser() {
  const [draft, setDraft] = useState("")

  return (
    <div className="glass p-6 md:p-10">
      <div className="text-xs uppercase tracking-[0.24em] text-white/42">Profound Mirror</div>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
        A quiet interface for turning insight into lived understanding.
      </h2>
      <p className="mt-4 text-lg text-white/65 leading-relaxed max-w-2xl">
        Not a chatbot theater. A structured mirror for language, pattern, and meaning—built for people who already
        read, listen, and grow, but need a place to integrate it.
      </p>

      <div className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
        <div>
          <label htmlFor="mirror-teaser" className="text-sm uppercase tracking-[0.2em] text-white/40">
            Try the shape of a reflection
          </label>
          <textarea
            id="mirror-teaser"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={5}
            className="mt-3 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-base text-white/88 placeholder:text-white/35 outline-none focus:border-white/22"
            placeholder="What is asking for your honesty today?"
          />
          <p className="mt-3 text-sm text-white/48">
            Preview only—your words stay in the browser until real persistence and consent exist.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">Product intent</div>
          <ul className="mt-4 space-y-3 text-white/72 leading-relaxed">
            <li>Surface the story beneath the symptom.</li>
            <li>Offer prompts grounded in paths, mantras, and timeless themes—not celebrity sound bites.</li>
            <li>Honor slowness: integration beats scroll-speed inspiration.</li>
          </ul>
          <Link href="/app" className="mt-6 inline-flex button-primary text-sm px-5 py-3">
            Begin your path
          </Link>
        </div>
      </div>
    </div>
  )
}
