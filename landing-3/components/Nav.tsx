"use client";

import { useState } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Casos", href: "#casos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="display-tight text-xl text-ink">
          Expansión Digital<span className="text-lime">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="hidden btn-primary md:inline-flex">
          Hablemos →
        </a>

        <button
          aria-label="Abrir menú"
          className="rounded-full border border-ink/20 p-2.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
          <span className="mt-1 block h-0.5 w-5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-semibold text-ink hover:bg-line/50"
              >
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Hablemos →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
