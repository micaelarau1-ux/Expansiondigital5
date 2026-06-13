import Image from "next/image";

const cols = [
  { title: "Servicios", links: ["Consultoría 360", "UX & CRO", "Paid Media", "Social Media", "Email Marketing", "Diseño Gráfico"] },
  { title: "Empresa", links: ["Nosotros", "Método", "Casos", "FAQ"] },
  { title: "Contacto", links: ["WhatsApp"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="display-tight text-xl text-ink">Expansión Digital<span className="text-lime">.</span></a>
            <p className="mt-4 max-w-xs text-muted">Expertos en ecommerce que se suman a tu equipo para crecer con resultados y métricas.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="display-tight text-sm uppercase tracking-wide text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#contacto" className="text-sm text-muted transition-colors hover:text-ink">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Expansión Digital. Todos los derechos reservados.</p>
          <a href="#" className="hover:text-ink">Política de privacidad</a>
        </div>
      </div>

      
        href="https://wa.me/5491160591946"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-105"
      >
        <Image
          src="/WhatsApp_icon.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)]"
        />
      </a>
    </footer>
  );
}
