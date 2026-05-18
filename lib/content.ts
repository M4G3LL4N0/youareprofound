export type QuoteItem = {
  text: string
  author: string
}

export type PathLesson = {
  title: string
  summary: string
  mantra: string
}

export type PathItem = {
  slug: string
  title: string
  subtitle: string
  description: string
  duration: string
  category: string
  gradient: string
  lessons: PathLesson[]
}

export const rotatingQuotes: QuoteItem[] = [
  {
    text: "What you seek is seeking you.",
    author: "Rumi",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung",
  },
  {
    text: "Waste no more time arguing about what a good person should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "You do not need panic to move powerfully.",
    author: "YouAreProfound",
  },
  {
    text: "Clarity is not the absence of storm. It is a deeper layer of sky underneath it.",
    author: "YouAreProfound",
  },
]

export const dailyMantras = [
  "I do not need panic to move powerfully.",
  "Nothing real can be rushed.",
  "I can be both peaceful and ambitious.",
  "Clarity grows when I stop fighting the moment.",
  "Depth is stronger than noise.",
  "I return to what matters.",
]

export const reflectionPrompts = [
  "What am I trying to control that I may need to understand instead?",
  "Where in my life am I calling fear by the name of ambition?",
  "What would a calmer version of strength look like today?",
  "What truth keeps returning to me even when I avoid it?",
  "What would it feel like to trust the timing of my own becoming?",
  "Which part of my life needs gentleness more than pressure?",
]

export const paths: PathItem[] = [
  {
    slug: "find-peace",
    title: "Find Peace",
    subtitle: "Reduce inner noise and return to steadiness.",
    description:
      "A guided path for people carrying stress, emotional overload, overthinking, and a constant sense of inner friction.",
    duration: "7 sessions",
    category: "Emotional Regulation",
    gradient: "from-sky-400/30 via-cyan-300/10 to-white/5",
    lessons: [
      {
        title: "Peace is not passivity",
        summary: "Understand why calm is not weakness, but a more intelligent posture toward reality.",
        mantra: "Calm is a form of strength.",
      },
      {
        title: "Stop wrestling the moment",
        summary: "Learn how resistance amplifies suffering and how acceptance restores usable energy.",
        mantra: "I release the war with what is.",
      },
      {
        title: "Build a steadier inner rhythm",
        summary: "Create repeatable daily rituals that reduce mental chaos and improve emotional clarity.",
        mantra: "I return to center again and again.",
      },
    ],
  },
  {
    slug: "understand-yourself",
    title: "Understand Yourself",
    subtitle: "See your patterns more clearly and honestly.",
    description:
      "A guided path for identity confusion, self-sabotage, recurring emotional patterns, and wanting to know your deeper nature.",
    duration: "8 sessions",
    category: "Identity",
    gradient: "from-fuchsia-400/30 via-pink-300/10 to-white/5",
    lessons: [
      {
        title: "The stories you tell about yourself",
        summary: "Notice the identities and narratives you keep repeating, and how they shape your decisions.",
        mantra: "I am more than my old story.",
      },
      {
        title: "Pattern recognition without self-hatred",
        summary: "Look honestly at your loops without collapsing into shame.",
        mantra: "Awareness is kinder than judgment.",
      },
      {
        title: "Becoming who you actually are",
        summary: "Shift from performance and reaction into a more truthful, aligned self.",
        mantra: "I let truth shape me.",
      },
    ],
  },
  {
    slug: "navigate-uncertainty",
    title: "Navigate Uncertainty",
    subtitle: "Stay grounded when life refuses to give guarantees.",
    description:
      "A guided path for people in transition, facing unknowns, hard decisions, delays, and unstable seasons of life.",
    duration: "6 sessions",
    category: "Transition",
    gradient: "from-amber-400/30 via-orange-300/10 to-white/5",
    lessons: [
      {
        title: "The nervous system and the unknown",
        summary: "Understand why uncertainty can feel threatening and how to move through it without collapse.",
        mantra: "I can stand inside the unknown.",
      },
      {
        title: "Clarity without total certainty",
        summary: "Learn how to act wisely before life is fully explained.",
        mantra: "I move with enough clarity for this step.",
      },
      {
        title: "Trusting the unfolding",
        summary: "Cultivate patience, perspective, and durable confidence when outcomes are still forming.",
        mantra: "What is becoming does not need to be forced.",
      },
    ],
  },
  {
    slug: "heal-from-loss",
    title: "Heal from Loss",
    subtitle: "Move through endings with depth and grace.",
    description:
      "A guided path for grief, heartbreak, emotional endings, and the disorientation that follows what mattered deeply.",
    duration: "7 sessions",
    category: "Healing",
    gradient: "from-violet-400/30 via-indigo-300/10 to-white/5",
    lessons: [
      {
        title: "Pain as proof of love",
        summary: "Reframe grief and heartbreak as evidence of depth, not weakness.",
        mantra: "What hurts mattered.",
      },
      {
        title: "Let the ending teach you",
        summary: "Find what the loss is revealing about attachment, meaning, and your own inner life.",
        mantra: "Even this ending has something to teach me.",
      },
      {
        title: "Rebuild without hardening",
        summary: "Learn how to keep your heart open while restoring stability and self-trust.",
        mantra: "I can heal without becoming closed.",
      },
    ],
  },
  {
    slug: "build-purpose",
    title: "Build Purpose",
    subtitle: "Align peace, ambition, meaning, and direction.",
    description:
      "A guided path for people wrestling with calling, greatness, direction, usefulness, and what a meaningful life should actually look like.",
    duration: "9 sessions",
    category: "Purpose",
    gradient: "from-emerald-400/30 via-green-300/10 to-white/5",
    lessons: [
      {
        title: "Purpose is not performance",
        summary: "Separate public achievement from the deeper feeling of rightness and meaningful contribution.",
        mantra: "My life is not a race against other lives.",
      },
      {
        title: "Greatness without self-violence",
        summary: "Learn how to pursue meaningful impact without using anxiety as fuel.",
        mantra: "I do not need panic to become powerful.",
      },
      {
        title: "The examined path forward",
        summary: "Develop a more grounded, enduring direction for work, love, and life.",
        mantra: "I build from truth, not fear.",
      },
    ],
  },
  {
    slug: "calm-your-mind",
    title: "Calm Your Mind",
    subtitle: "Turn down overthinking and re-enter presence.",
    description:
      "A guided path for constant analysis, mental spirals, anticipation, and the inability to feel settled in your own mind.",
    duration: "6 sessions",
    category: "Mind",
    gradient: "from-blue-400/30 via-slate-300/10 to-white/5",
    lessons: [
      {
        title: "Thoughts are not commands",
        summary: "Create separation between mental activity and identity.",
        mantra: "I observe the mind without obeying everything it says.",
      },
      {
        title: "Presence as relief",
        summary: "Learn simple ways to return from abstraction into actual life.",
        mantra: "This moment is enough to begin.",
      },
      {
        title: "Build a quieter interior",
        summary: "Use repeatable structure, language, and attention rituals to reduce mental noise.",
        mantra: "Silence is becoming available again.",
      },
    ],
  },
]
