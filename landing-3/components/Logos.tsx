import Reveal from "./Reveal";

const platforms = ["Shopify", "Tiendanube", "WooCommerce", "Meta", "Google", "Mercado Libre"];

export default function Logos() {
  return (
    <section className="container-x py-14">
      <Reveal>
        <p className="paren mx-auto block w-fit">Plataformas que ya usás</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {platforms.map((p) => (
            <span key={p} className="display-tight text-xl text-ink/30 transition-colors hover:text-ink/70">
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
