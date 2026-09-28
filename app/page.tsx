import Link from "next/link";
import { PremiumHeroVisual } from "@/components/premium/PremiumHeroVisual";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import QuoteEngine from "@/components/QuoteEngine";
import ProfoundMirrorTeaser from "@/components/ProfoundMirrorTeaser";
import { paths } from "@/lib/content";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />

      <div className="relative z-10 pb-24">
        <Navbar />

        <header className="section-shell pt-10 md:pt-16">
          <p className="pill w-fit text-xs uppercase tracking-[0.28em] text-white/55">Meaning operating system</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            You are not lost.{" "}
            <span className="gradient-text">You are profound.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Turn timeless wisdom into clarity, peace, and direction people can actually live—not another feed of
            inspiration you forget by Tuesday.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/app" className="button-primary px-8" aria-label="Begin your path">
              Begin your path
            </Link>
            <a href="#mirror" className="button-secondary px-8">
              Preview Profound Mirror
            </a>
          </div>
        </header>

        <section className="section-shell mt-16 grid items-start gap-10 lg:grid-cols-2">
          <HeroProductPanel />
          <PremiumHeroVisual className="max-lg:mt-2" />
        </section>

        <section id="wisdom" className="section-shell mt-20 scroll-mt-28 md:mt-28">
          <div className="glass p-8 text-center md:p-12">
            <div className="text-xs uppercase tracking-[0.28em] text-white/45">Living language</div>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Wisdom that dissolves—and returns on purpose.</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-white/58">
              Short lines, clear attribution, slow fades. The point is not collection. It is contact with something
              steadier than the noise.
            </p>
            <div className="mt-10">
              <QuoteEngine />
            </div>
          </div>
        </section>

        <section id="integration" className="section-shell mt-16 scroll-mt-28 md:mt-24">
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <div className="glass p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">Positioning</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Not inspiration. Integration.</h2>
              <p className="mt-4 leading-relaxed text-white/65">
                Most people already consume talks, books, and threads. The gap is absorption: turning insight into
                language you trust, decisions you can defend, and emotional ground you can return to.
              </p>
              <p className="mt-4 leading-relaxed text-white/65">
                YouAreProfound is original structure, owned prompts, and cinematic calm—built for integration, not
                endless scrolling or unlicensed clip libraries.
              </p>
            </div>
            <div className="glass flex flex-col justify-center p-8 md:p-10">
              <ul className="space-y-5 text-white/72">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-400" />
                  Guided Profound Paths with lessons, mantras, and summaries you can carry into the week.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  Daily mantras and reflection prompts designed for founders, seekers, and seasons of uncertainty.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                  Profound Mirror as a ritual interface for honest writing—future AI support will be explicit and
                  optional, never a replacement for care.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="paths" className="section-shell mt-16 scroll-mt-28 md:mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">Profound Paths</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Structured routes into depth.</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/60">
                Each path combines lessons, mantras, and emotional realism—premium spiritual-tech without the generic
                meditation-template aesthetic.
              </p>
            </div>
            <Link href="/app" className="button-secondary self-start md:self-auto">
              Open dashboard
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {paths.map((path) => (
              <article
                key={path.slug}
                className={`glass card-shine border-white/10 bg-gradient-to-br p-6 md:p-7 ${path.gradient}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-white/55">
                  <span>{path.category}</span>
                  <span>{path.duration}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{path.title}</h3>
                <p className="mt-2 text-white/72">{path.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/58">{path.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="mirror" className="section-shell mt-16 scroll-mt-28 md:mt-24">
          <ProfoundMirrorTeaser />
        </section>

        <section id="experience" className="section-shell mt-16 scroll-mt-28 md:mt-24">
          <div className="glass p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.28em] text-white/45">Experience design</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Apple-keynote calm meets inner life.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/62">
              Dark cinematic depth, glass panels, soft gradients, and ambient motion keep the nervous system oriented
              toward spaciousness. Typography stays large and readable; hierarchy stays obvious on mobile; nothing
              shouts for attention like a cheap SaaS signup wall.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Breathing room", "Glass + light", "Slow, honest motion"].map((label) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-white/75">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="section-shell mt-16 scroll-mt-28 text-center md:mt-24">
          <div className="glass p-10 md:p-14">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Carry one path. Let it change the week.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/62">
              Start with the dashboard: featured path, daily mantra, reflection prompts, and the Profound Mirror
              preview—everything tuned for a demo that feels investor-ready without pretending the backend is finished.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/app" className="button-primary px-10">
                Begin your path
              </Link>
              <a href="#paths" className="button-secondary px-8">
                Explore paths
              </a>
            </div>
          </div>
        </section>

        <footer className="section-shell mt-20 flex flex-col gap-4 border-t border-white/10 pt-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} YouAreProfound. Crafted for meaning, not noise.</div>
          <div className="flex flex-wrap gap-6">
            <Link href="/app" className="transition-colors hover:text-white/70">
              App
            </Link>
            <a href="#paths" className="transition-colors hover:text-white/70">
              Paths
            </a>
            <a href="#mirror" className="transition-colors hover:text-white/70">
              Mirror
            </a>
          </div>
        </footer>
        <div className="section-shell">
          <ProductHonestyNote status="demo" />
        </div>
      </div>
    </div>
  );
}
