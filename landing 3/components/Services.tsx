import Reveal from "./Reveal";

const groups: Record<string, string> = {
  Estrategia: "bg-ink text-paper",
  Tecnología: "bg-lime text-ink",
  Crecimiento: "bg-paper text-ink border border-ink/20",
  Marca: "bg-coal text-paper",
};

const services = [
  { name: "Consultoría 360", desc: "Mirada integral de tu tienda: estrategia, canales y números en un solo plan.", group: "Estrategia", featured: true },
  { name: "UX & CRO", desc: "Más ventas con el mismo tráfico, optimizando la experiencia de compra.", group: "Tecnología" },
  { name: "Paid Media", desc: "Campañas que se pagan solas, con foco en retorno, no en gastar.", group: "Crecimiento" },
  { name: "Social Media", desc: "Contenido que construye marca y comunidad alrededor de tu negocio.", group: "Crecimiento" },
  { name: "Email Marketing", desc: "El canal más rentable, bien aprovechado con flujos y automatizaciones.", group: "Crecimiento", featured: true },
  { name: "Diseño Gráfico", desc: "Identidad y piezas visuales que comunican y venden.", group: "Marca" },
];

export default function Services() {
  return (
    <section id="servicios" className="border-y border-line bg-card">
      <div className="container-x py-20">
        <Reveal>
          <p className="paren">03 — Soluciones</p>
          <h2 className="mt-5 max-w-2xl display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
            Todo para escalar, <span className="hl">en un solo equipo.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">Tomás solo lo que tu negocio necesita hoy. Sin paquetes cerrados.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 90}>
              <a
                href="#contacto"
                className={`card group flex h-full flex-col hover:-translate-y-1 hover:border-ink ${s.featured ? "ring-1 ring-lime" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${groups[s.group]}`}>
                    {s.group}
                  </span>
                  {s.featured && <span className="text-xs font-bold uppercase tracking-wide text-ink/40">★</span>}
                </div>
                <h3 className="mt-5 display-tight text-xl text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-muted">{s.desc}</p>
                <span className="mt-5 text-sm font-bold text-ink transition-colors group-hover:text-muted">
                  Quiero saber más →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
