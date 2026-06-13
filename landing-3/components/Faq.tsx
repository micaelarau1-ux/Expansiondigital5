import Reveal from "./Reveal";

const faqs = [
  { q: "¿Cómo se adapta el servicio a mi presupuesto?", a: "Partimos de lo que podés invertir hoy y priorizamos las acciones de mayor impacto. Escalamos a medida que llegan los resultados." },
  { q: "¿Trabajan con tiendas chicas o solo con marcas grandes?", a: "Con negocios en distintas etapas. El plan se ajusta a tu tamaño." },
  { q: "¿En cuánto tiempo veo resultados?", a: "El primer mes es diagnóstico y primeras optimizaciones. Los resultados sostenibles se consolidan entre el segundo y tercer mes." },
  { q: "¿Y si solo necesito un servicio?", a: "Perfecto. No vendemos paquetes cerrados: tomás solo lo que necesitás hoy." },
  { q: "¿Cómo es el acompañamiento?", a: "Contacto directo con quien hace el trabajo y reportes con métricas claras." },
  { q: "¿Con qué plataformas trabajan?", a: "Shopify, Tiendanube, WooCommerce, Mercado Libre, Meta y Google Ads, y las principales herramientas de email y analítica." },
];

export default function Faq() {
  return (
    <section id="faq" className="border-y border-line bg-card">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="paren">07 — Preguntas</p>
          <h2 className="mt-5 display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
            Todo lo que necesitás saber.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-paper">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 display-tight text-ink marker:hidden">
                  {f.q}
                  <span className="ml-4 shrink-0 text-lime transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="-mt-1 pb-5 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
