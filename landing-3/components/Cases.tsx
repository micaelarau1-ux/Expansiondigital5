import Reveal from "./Reveal";
import CountUp from "./CountUp";

type Metric = { value: number; prefix?: string; suffix?: string; decimals?: number; label: string };

const cases: { tag: string; name: string; metrics: Metric[]; note: string }[] = [
  {
    tag: "Indumentaria",
    name: "Marca de moda",
    metrics: [
      { value: 180, prefix: "+", suffix: "%", label: "ventas en 6 meses" },
      { value: 4.2, suffix: "x", decimals: 1, label: "ROAS en paid" },
    ],
    note: "Reescribimos la estrategia de canales y optimizamos la tienda.",
  },
  {
    tag: "Hogar & Deco",
    name: "Ecommerce de hogar",
    metrics: [
      { value: 38, prefix: "−", suffix: "%", label: "costo por adquisición" },
      { value: 27, prefix: "+", suffix: "%", label: "tasa de conversión" },
    ],
    note: "Trabajo de UX/CRO sobre el checkout.",
  },
  {
    tag: "Belleza",
    name: "Tienda de cosmética",
    metrics: [
      { value: 32, suffix: "%", label: "ingresos por email" },
      { value: 3, prefix: "+", suffix: "x", label: "recompra" },
    ],
    note: "Flujos de email y automatizaciones de retención.",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="border-y border-line bg-card">
      <div className="container-x py-20">
        <Reveal>
          <p className="paren">05 — Resultados</p>
          <h2 className="mt-5 max-w-2xl display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
            Casos que <span className="hl">hablan solos.</span>
          </h2>
          <p className="mt-4 text-sm text-muted">* Reemplazá por tus casos reales o testimonios.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="card h-full">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">{c.tag}</span>
                <h3 className="mt-2 display-tight text-xl text-ink">{c.name}</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="display-tight text-4xl text-ink">
                        <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals ?? 0} />
                      </div>
                      <div className="mt-1 text-sm text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-line pt-5 text-muted">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
