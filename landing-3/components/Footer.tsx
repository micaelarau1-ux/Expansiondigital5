type FooterLink = { label: string; href: string; external?: boolean };
type FooterCol = { title: string; links: FooterLink[] };

const cols: FooterCol[] = [
  {
    title: "Servicios",
    links: [
      { label: "Consultoría 360", href: "#servicios" },
      { label: "UX & CRO", href: "#servicios" },
      { label: "Paid Media", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Método", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: "https://wa.me/5491160591946", external: true },
    ],
  },
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
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
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

      <a
        href="https://wa.me/5491160591946"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-2xl text-ink shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
      >
        ✆
      </a>
    </footer>
  );
}
