import Reveal from "./Reveal";

export default function CtaFinal() {
  return (
    <section id="contacto" className="container-x py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl2 bg-ink px-7 py-16 text-center text-paper sm:px-12">
          <p className="paren !text-paper/60 mx-auto block w-fit">Empecemos</p>
          <h2 className="mx-auto mt-5 max-w-3xl display-tight text-4xl leading-[1.02] sm:text-5xl">
            ¿Crecemos <span className="hl">juntos?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">
            Llamada gratuita de 30 minutos. Te decimos qué está fallando y cómo lo resolvemos, según tu presupuesto.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/5491160591946" className="btn-lime">Hablemos por WhatsApp →</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
