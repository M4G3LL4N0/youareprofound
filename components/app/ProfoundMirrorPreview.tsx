"use client"

import { useMemo, useState } from "react"

const seeds = [
  {
    keywords: ["tired", "exhausted", "burnout", "drained"],
    response:
      "Exhaustion is rarely about how much you have done. It is about how much of it was actually yours. Pause before optimizing. Ask which part of this season you are doing for yourself, and which part you are doing to be safe from disapproval.",
  },
  {
    keywords: ["lost", "purpose", "direction", "meaning"],
    response:
      "You are not lost. You are between identities. The old one no longer answers the questions you have, and the new one has not finished forming. Resist the urge to force a label. Walk one honest direction for one honest week.",
  },
  {
    keywords: ["anxious", "worried", "fear", "panic", "scared"],
    response:
      "Anxiety is energy without a frame. Give it shape. Name the worst case. Name the next small action. The mind calms when it is given structure, not when it is told to stop.",
  },
  {
    keywords: ["heartbreak", "grief", "loss", "miss", "lonely"],
    response:
      "Grief is proof that something real existed. Do not rush yourself into closure to make others comfortable. Let the ending teach you what mattered. Strength here is honesty, not speed.",
  },
  {
    keywords: ["fail", "failure", "behind", "not enough"],
    response:
      "You are not behind. You are on a different curve. Comparison borrowed someone else's timeline and asked you to feel small inside it. Return to your own metrics: integrity, growth, peace, contribution.",
  },
]

const defaultResponse =
  "Sit with what you wrote for a moment. Notice which sentence felt most true. Underline it in your mind. That sentence is where the reflection begins — not the loudest worry, but the quietest honest one."

function reflect(input: string) {
  const lower = input.toLowerCase()
  const hit = seeds.find((seed) => seed.keywords.some((k) => lower.includes(k)))
  return hit?.response ?? defaultResponse
}

export default function ProfoundMirrorPreview() {
  const [input, setInput] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const response = useMemo(() => reflect(input || ""), [input])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!input.trim()) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setInput("")
    setSubmitted(false)
  }

  return (
    <section className="glass p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/42">Profound Mirror</div>
          <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            A quieter place to think.
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/65">
          Preview
        </div>
      </div>

      <p className="mt-3 max-w-2xl text-white/62 leading-relaxed">
        Write what is true right now. The Mirror is a reflective surface — it returns your own
        words with more structure, not a stream of advice. This preview uses a simple keyword demo
        (not a live AI model); a future release will label any model-backed help clearly and keep it
        optional.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.22em] text-white/45">
            What is true for you today?
          </span>
          <textarea
            value={input}
            onChange={(event) => {
              setInput(event.target.value)
              if (submitted) setSubmitted(false)
            }}
            placeholder="I feel pulled in many directions but cannot tell which one is mine..."
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white/85 placeholder:text-white/35 outline-none focus:border-white/25 focus:bg-black/40 transition"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="button-primary text-sm px-5 py-3">
            Reflect
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="button-secondary text-sm px-5 py-3"
          >
            Clear
          </button>
          <span className="text-xs text-white/40">
            Demo reflection. No data is stored.
          </span>
        </div>
      </form>

      {submitted && input.trim() && (
        <div className="mt-6 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.16),rgba(255,255,255,0.03))] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-white/45">Mirror Returns</div>
          <p className="mt-3 text-lg leading-relaxed text-white/85">{response}</p>
        </div>
      )}
    </section>
  )
}
