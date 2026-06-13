import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Diagnóstico", body: "Entendemos tu negocio y tus números." },
  { n: "02", title: "Plan a tu medida", body: "Propuesta según objetivos y presupuesto." },
  { n: "03", title: "Ejecución", body: "Hacemos y te mantenemos adentro." },
  { n: "04", title: "Medición y ajuste", body: "Reportamos y optimizamos sin parar." },
];

export default function Method() {
  return (
    <section id="metodo" className="container-x py-20">
      <Reveal>
        <p className="paren">04 — Proceso</p>
        <h2 className="mt-5 max-w-2xl display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
          Un método claro, todo a la vista.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} className="bg-paper">
            <div className="h-full p-7">
              <span className="display-tight text-5xl text-lime">{s.n}</span>
              <h3 className="mt-4 display-tight text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
