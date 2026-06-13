import Reveal from "./Reveal";

const pains = [
  "Pagás por servicios que no terminás de entender.",
  "Te hablan en difícil y quedás afuera de tu propio negocio.",
  "Presupuestos pensados para grandes marcas, no para tu etapa.",
  "Reportes con métricas que no se traducen en ventas.",
  "Soluciones genéricas que no contemplan tu rubro.",
  "Sentís que no crece tu negocio, ni tu conocimiento.",
];

export default function Problem() {
  return (
    <section className="border-y border-line bg-coal text-paper">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="paren !text-paper/60">01 — Diagnóstico</p>
          <h2 className="mt-5 display-tight text-4xl leading-[1.02] sm:text-5xl">
            La mayoría de las agencias <span className="hl">no escalan</span> tu negocio.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 rounded-2xl border border-paper/10 bg-paper/[0.04] p-5">
                <span className="mt-0.5 text-lime" aria-hidden>✕</span>
                <span className="text-paper/85">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
