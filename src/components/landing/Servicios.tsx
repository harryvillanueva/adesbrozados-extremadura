import { Sprout, Tractor, Home } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const servicios = [
  {
    icon: Sprout,
    title: "Fincas Rústicas",
    text: "Mantenimiento preventivo para evitar incendios. Eliminamos maleza y material invasivo protegiendo el ecosistema local.",
  },
  {
    icon: Tractor,
    title: "Terrenos de Cultivo",
    text: "Limpiamos linderos y restos de cosechas para que las malas hierbas no roben nutrientes ni agua a sus futuras plantaciones.",
  },
  {
    icon: Home,
    title: "Solares y Parcelas",
    text: "Desbroce de seguridad en zonas cercanas a núcleos urbanos y polígonos industriales, cumpliendo con las normativas vigentes.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
            Qué hacemos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluciones integrales para el cuidado y mantenimiento de su terreno
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 hover:shadow-elevated">
                <div className="bg-gradient-primary pointer-events-none absolute -top-24 -right-24 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
                <span className="bg-gradient-primary relative grid size-14 place-items-center rounded-2xl shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="size-7 text-primary-foreground" />
                </span>
                <h3 className="relative mt-6 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <span className="bg-gradient-primary relative mt-6 block h-1 w-10 rounded-full transition-all duration-500 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
