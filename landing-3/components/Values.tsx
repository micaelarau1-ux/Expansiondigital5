import Reveal from "./Reveal";

const values = [
  { title: "Nos adaptamos a tu presupuesto", body: "Armamos el alcance según lo que podés invertir hoy, sin fees fijos inflados.", icon: "◐" },
  { title: "Cercanos y accesibles", body: 'Te explicamos todo en "simple" y estás siempre al tanto.', icon: "✦" },
  { title: "Te guiamos y acompañamos", body: "No entregamos un informe y desaparecemos; caminamos el proceso con vos.", icon: "→" },
  { title: "Nos gusta capacitar", body: "Que tu equipo sepa más es el punto de partida para escalar.", icon: "✚" },
  { title: "Decisiones con datos y métricas", body: "Todo lo que hacemos se mide, y vos lo ves.", icon: "▲" },
];

export default function Values() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <p className="paren">02 — Diferencial</p>
        <h2 className="mt-5 max-w-2xl display-tight text-4xl leading-[1.02] text-ink sm:text-5xl">
          Un equipo que rema con vos.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 90}>
            <div className="card h-full hover:-translate-y-1 hover:border-ink">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-lg text-ink">
                {v.icon}
              </span>
              <h3 className="mt-5 display-tight text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
