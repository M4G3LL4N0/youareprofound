import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link"
import AppQuoteRotator from "@/components/app/AppQuoteRotator"
import AppSidebar from "@/components/app/AppSidebar"
import AppTopbar from "@/components/app/AppTopbar"
import ProfoundMirrorPreview from "@/components/app/ProfoundMirrorPreview"
import { dailyMantras, paths, reflectionPrompts } from "@/lib/content"

const featuredPath = paths[4]
const otherPaths = paths.slice(0, 4)

export default function AppPage() {
  return (
    <main className="min-h-screen px-4 py-5 md:px-6 md:py-6">
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-[1480px] grid xl:grid-cols-[290px_minmax(0,1fr)] gap-5">
        <AppSidebar />

        <div className="min-w-0">
          <AppTopbar />

          <div className="mt-5 grid 2xl:grid-cols-[1.08fr_0.92fr] gap-5">
            <section className="glass p-5 md:p-7">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">Featured Path</div>

              <div
                className={`mt-4 rounded-[30px] border border-white/10 bg-gradient-to-br ${featuredPath.gradient} p-6 md:p-7`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70">
                    {featuredPath.category}
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70">
                    {featuredPath.duration}
                  </div>
                </div>

                <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
                  {featuredPath.title}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/78 max-w-3xl">
                  {featuredPath.subtitle}
                </p>
                <p className="mt-4 text-white/64 leading-relaxed max-w-3xl">
                  {featuredPath.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/#paths" className="button-primary">
                    View Paths
                  </Link>
                  <Link href="/#mirror" className="button-secondary">
                    Use Profound Mirror
                  </Link>
                </div>
              </div>

              <div className="mt-5 grid md:grid-cols-3 gap-4">
                {featuredPath.lessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="text-lg font-semibold">{lesson.title}</div>
                    <div className="mt-3 text-white/60 leading-relaxed">{lesson.summary}</div>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                      {lesson.mantra}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-5">
              <div className="glass p-5 md:p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/42">Today</div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.14),rgba(255,255,255,0.03))] p-5">
                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">Daily Mantra</div>
                    <div className="mt-3 text-2xl font-semibold leading-snug">{dailyMantras[0]}</div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(244,114,182,0.14),rgba(255,255,255,0.03))] p-5">
                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">Reflection Prompt</div>
                    <div className="mt-3 text-lg leading-relaxed text-white/82">{reflectionPrompts[0]}</div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(251,146,60,0.14),rgba(255,255,255,0.03))] p-5">
                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">Suggested Move</div>
                    <div className="mt-3 text-lg leading-relaxed text-white/82">
                      Return to one path today instead of chasing twenty answers.
                    </div>
                  </div>
                </div>
              </div>

              <AppQuoteRotator />
            </section>
          </div>

          <div id="mirror" className="mt-5">
            <ProfoundMirrorPreview />
          </div>

          <div className="mt-5 grid xl:grid-cols-[0.95fr_1.05fr] gap-5">
            <section className="glass p-5 md:p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">Path Library</div>
              <div className="mt-4 grid gap-4">
                {otherPaths.map((path) => (
                  <div
                    key={path.slug}
                    className={`rounded-[26px] border border-white/10 bg-gradient-to-br ${path.gradient} p-5`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-xl font-semibold">{path.title}</div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/68">
                        {path.duration}
                      </div>
                    </div>
                    <div className="mt-2 text-white/75">{path.subtitle}</div>
                    <div className="mt-3 text-white/58 leading-relaxed">{path.description}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass p-5 md:p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">Content Engine</div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/40">Daily Mantras</div>
                  <div className="mt-4 grid gap-3">
                    {dailyMantras.slice(1, 4).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/78"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/40">Reflection Prompts</div>
                  <div className="mt-4 grid gap-3">
                    {reflectionPrompts.slice(1, 4).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/78"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/40">Premium Positioning</div>
                <div className="mt-3 text-2xl font-semibold">A meaning operating system for modern life.</div>
                <div className="mt-3 max-w-3xl text-white/60 leading-relaxed">
                  Not just meditation. Not just content. Not just motivation. This is structured
                  inner-life infrastructure designed to help people absorb wisdom and live from it.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
