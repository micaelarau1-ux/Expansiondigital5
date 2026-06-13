import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: 40, prefix: "+", suffix: "", label: "Proyectos acompañados" },
  { value: 4, prefix: "", suffix: "x", decimals: 0, label: "Retorno promedio en paid" },
  { value: 100, prefix: "", suffix: "%", label: "Decisiones medidas" },
  { value: 6, prefix: "", suffix: "", label: "Semanas a los primeros resultados" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-ink text-paper">
      <div className="container-x py-16">
        <Reveal>
          <p className="paren !text-paper/60">Nuestros números</p>
          <h2 className="mt-4 max-w-2xl display-tight text-3xl leading-tight sm:text-4xl">
            Crecimiento que se puede <span className="hl">medir.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div>
                <div className="display-tight text-5xl text-lime sm:text-6xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-3 text-lime/40">
                  <div className="ticks" />
                </div>
                <p className="mt-3 text-sm text-paper/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-paper/40">* Reemplazá por tus números reales.</p>
      </div>
    </section>
  );
}
