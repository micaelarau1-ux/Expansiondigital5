const tags = ["Consultoría de negocio 360", "Paid Media", "UX & CRO", "Métricas", "Diseño"];
const marquee = ["Sumamos talento a tu equipo", "Crecé con datos", "Sin ser una agencia"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Top marquee band, pow-style */}
      <div className="border-b border-line bg-ink py-3 text-paper">
        <div className="flex overflow-hidden">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 animate-marquee items-center gap-6 pr-6"
              aria-hidden={dup === 1}
            >
              {[...marquee, ...marquee, ...marquee].map((m, i) => (
                <span key={i} className="flex items-center gap-6 display-tight text-sm uppercase">
                  {m}
                  <span className="text-lime">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-x grid items-center gap-14 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="paren animate-fade-up">Expertos en ecommerce</p>

          <h1
            className="mt-5 display-tight text-[2.9rem] leading-[0.98] text-ink animate-fade-up sm:text-6xl lg:text-[4.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            No somos una agencia.
            <br />
            Somos el equipo que <span className="hl">te faltaba.</span>
          </h1>

          <p
            className="mt-6 max-w-md text-lg leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Nos sumamos a tu negocio para hacerlo crecer con resultados y métricas, adaptados a
            tu presupuesto.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a href="#contacto" target="_blank" rel="noopener noreferrer" className="btn-lime">Quiero crecer →</a>
            <a href="#servicios" className="btn-ghost">Ver servicios</a>
          </div>
        </div>

        {/* Bracketed services list, pow-style */}
        <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="relative rounded-xl2 border border-ink bg-coal p-8 text-paper">
            <span className="paren !text-paper/60">Lo que hacemos</span>
            <ul className="mt-5 space-y-1">
              {tags.map((t) => (
                <li
                  key={t}
                  className="group flex items-center justify-between border-b border-paper/10 py-3 last:border-0"
                >
                  <span className="display-tight text-xl">{t}</span>
                  <span className="text-lime transition-transform group-hover:translate-x-1">→</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-xl2 bg-lime/30" />
        </div>
      </div>
    </section>
  );
}
