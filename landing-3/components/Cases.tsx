"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Datos de los casos                                                 */
/*  Cada métrica es "count" (número que anima al entrar en pantalla)    */
/*  o "text" (valor cualitativo: flechas, rangos, etc.)                */
/* ------------------------------------------------------------------ */

type Metric =
  | {
      kind: "count";
      value: number;
      decimals?: number;
      prefix?: string;
      suffix?: string;
      label: string;
    }
  | { kind: "text"; display: string; label: string };

type Case = {
  client: string;
  tag: string;
  title: string;
  blurb: string;
  metrics: Metric[];
};

const CASES: Case[] = [
  {
    client: "Sportline",
    tag: "Paid Media",
    title: "Menos inversión, más ventas",
    blurb:
      "Bajamos el gasto en pauta y aun así subimos las ventas del canal, con un ROAS que creció de forma sostenida todo el año.",
    metrics: [
      { kind: "count", prefix: "+", value: 20, suffix: "%", label: "Ventas desde pauta" },
      { kind: "text", display: "×2", label: "Tasa de conversión" },
      { kind: "count", prefix: "+", value: 4.8, decimals: 1, suffix: " pts", label: "ROAS total" },
    ],
  },
  {
    client: "New Balance",
    tag: "Email Marketing & Automation",
    title: "Retención que genera recompra",
    blurb:
      "Reactivamos el canal de email: más aperturas, más tráfico al sitio y una conversión que pasó de 0 a 5% impulsando la recompra.",
    metrics: [
      { kind: "count", prefix: "~", value: 70, suffix: "%", label: "Open Rate alcanzado" },
      { kind: "text", display: "0 → 5%", label: "Tasa de conversión" },
      { kind: "text", display: "↑ Tráfico", label: "A la web de New Balance" },
    ],
  },
  {
    client: "Bloodline",
    tag: "UX & CRO · Paid · Email",
    title: "Crecimiento en todo el funnel",
    blurb:
      "Trabajo integral de UX & CRO, Paid Media y Email: más conversión punta a punta, más pedidos mayoristas y minoristas, y automatizaciones que sostienen la recompra.",
    metrics: [
      { kind: "count", prefix: "+", value: 200, suffix: "%", label: "CR (UX & CRO)" },
      { kind: "count", prefix: "+", value: 100, suffix: "%", label: "CR en Paid Media" },
      { kind: "count", value: 19.5, decimals: 1, suffix: "%", label: "CR canal Email" },
    ],
  },
  {
    client: "Crecimiento orgánico",
    tag: "Redes Sociales",
    title: "Comunidad y tráfico real",
    blurb:
      "Gestión de contenido y crecimiento orgánico que se tradujo en visibilidad, clicks reales a la web y una comunidad en plena expansión.",
    metrics: [
      { kind: "count", value: 583, suffix: "K", label: "Visualizaciones (90 días)" },
      { kind: "count", prefix: "+", value: 298, suffix: "%", label: "Clicks a la web" },
      { kind: "count", prefix: "+", value: 40.8, decimals: 1, suffix: "%", label: "Seguidores nuevos" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Animación de números (count-up al entrar en viewport)             */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function formatAR(n: number, decimals: number) {
  return n.toFixed(decimals).replace(".", ",");
}

function CountValue({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  start,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span>
      {prefix}
      {formatAR(display, decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Tarjeta de caso                                                    */
/* ------------------------------------------------------------------ */

function CaseCard({ data }: { data: Case }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-3xl border border-paper/10 bg-coal p-8 transition-colors hover:border-lime/40"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-xl font-extrabold tracking-tight">{data.client}</span>
        <span className="text-right text-xs font-semibold uppercase tracking-widest text-lime">
          {data.tag}
        </span>
      </div>

      <h3 className="mt-3 font-display text-2xl font-bold leading-snug">{data.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-paper/60">{data.blurb}</p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {data.metrics.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl border border-paper/5 bg-paper/[0.03] px-3 py-5 text-center"
          >
            <div className="font-display text-xl font-extrabold leading-none text-lime sm:text-2xl">
              {m.kind === "count" ? (
                <CountValue
                  value={m.value}
                  decimals={m.decimals}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  start={inView}
                />
              ) : (
                <span>{m.display}</span>
              )}
            </div>
            <div className="mt-2 text-[0.7rem] leading-tight text-paper/50">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sección                                                            */
/* ------------------------------------------------------------------ */

export default function Cases() {
  return (
    <section id="casos" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">
          (casos de éxito)
        </p>

        <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Marcas reales, resultados medibles.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-paper/70">
          Esto es lo que logramos cuando nos sumamos a un equipo.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <CaseCard key={c.client + c.title} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
