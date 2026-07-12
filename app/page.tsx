const pillars = [
  {
    title: "Contract-first architecture",
    description:
      "Design domain boundaries before screens so the Application instance can grow without inheriting POC shortcuts.",
  },
  {
    title: "Separate instance governance",
    description:
      "Keep Application independent from the POC runtime, data store, and deployment path.",
  },
  {
    title: "Measured promotion path",
    description:
      "Adopt ideas from the POC only after they satisfy explicit acceptance criteria and evidence.",
  },
];

const milestones = [
  "Admin member management vertical slice",
  "Service and domain layering rules",
  "Independent migration and config strategy",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#0b1120_42%,_#06090f_100%)] text-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-16 lg:px-10">
        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Application instance
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl" style={{ fontFamily: "var(--font-sora)" }}>
              Build the production-track Elevate app with architecture first.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              This instance starts clean. It will reuse product intent from the POC,
              but the codebase, data flow, and deployment path should stay intentionally separate.
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Initial Application milestones</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {milestones.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-sora)" }}>
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
