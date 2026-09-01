import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import equipoImg from "@/assets/equipo-trabajo.jpg";

const bullets = [
  "Compromiso total con el medio ambiente",
  "Maquinaria de última generación",
  "Atención rápida y presupuesto a medida",
];

export function Historia() {
  return (
    <section id="historia" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-gradient-primary pointer-events-none absolute -left-32 top-20 size-80 rounded-full opacity-10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
            Sobre nosotros
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Nuestra Historia
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            DESBROZADOS EXTREMADURA nace de una profunda vocación por proteger y mantener nuestro
            entorno natural. Como empresa de nueva creación, hemos irrumpido en el sector con un
            objetivo claro: revolucionar la limpieza de fincas y parcelas combinando el respeto
            tradicional por la tierra con la maquinaria más avanzada del mercado.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Entendemos que un terreno limpio no es solo una cuestión estética, sino una necesidad
            vital para prevenir incendios y garantizar la seguridad. Por ello, nuestro equipo está
            formado por profesionales altamente cualificados que se desplazan a cualquier punto de
            la región para ofrecer soluciones rápidas, seguras y a medida.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 100} className="flex items-center gap-3">
                <span className="bg-gradient-primary grid size-6 shrink-0 place-items-center rounded-full shadow-glow">
                  <Check className="size-3.5 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold">{b}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="bg-gradient-primary absolute -inset-3 rounded-[2.5rem] opacity-15 blur-2xl" />
          <img
            src={equipoImg}
            alt="Equipo de profesionales desbrozando un terreno con desbrozadoras"
            loading="lazy"
            width={1200}
            height={912}
            className="relative w-full rounded-[2.5rem] object-cover shadow-elevated transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="glass-panel absolute -bottom-6 left-6 rounded-2xl px-5 py-4 sm:left-10">
            <p className="text-2xl font-extrabold text-primary">+15 años</p>
            <p className="text-xs font-medium text-muted-foreground">de experiencia en campo</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
