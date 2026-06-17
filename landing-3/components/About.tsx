import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { big: "1:1", small: "trato directo con quien hace el trabajo", animated: false as const },
  { value: 0, suffix: "", small: "fees ocultos", animated: true as const },
  { value: 100, suffix: "%", small: "decisiones explicadas", animated: true as const },
  { big: "∞", small: "acompañamiento real", animated: false as const },
];

export default function About() {
  return (
    <section id="nosotros" className="container-x py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="paren">06 — Quiénes somos</p>
          <h2 className="mt-5 display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
            Elegimos <span className="hl">no ser una agencia.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>Somos un equipo de especialistas que se suma al tuyo. Sin capas de cuentas ni estructuras que encarecen todo.</p>
            <p>Trabajamos cerca, hablamos claro y decidimos con datos. Que tu negocio crezca, y que entiendas cómo.</p>
          </div>
          <a href="#contacto" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">Conocé cómo trabajamos →</a>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.small} className="card">
                <div className="display-tight text-4xl text-ink">
                  {s.animated ? <CountUp value={s.value} suffix={s.suffix} /> : s.big}
                </div>
                <div className="mt-2 text-sm text-muted">{s.small}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
