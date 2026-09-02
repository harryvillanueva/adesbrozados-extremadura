import { Cog, Play, Radio, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import videoAsset from "@/assets/cortadora-video.mp4.asset.json";
import cortadoraAsset from "@/assets/cortadora-grande.png.asset.json";
import maquinaAsset from "@/assets/maquina-1.jpg.asset.json";

const ventajas = [
  {
    icon: Radio,
    title: "Control remoto",
    text: "Operamos la maquinaria a distancia, con máxima seguridad en pendientes y zonas de difícil acceso.",
  },
  {
    icon: Cog,
    title: "Orugas de alta tracción",
    text: "Cadenas reforzadas que se adaptan a cualquier terreno: barro, piedra o desniveles pronunciados.",
  },
  {
    icon: ShieldCheck,
    title: "Trabajo seguro y eficiente",
    text: "Tecnología de última generación que reduce riesgos y multiplica el rendimiento en cada jornada.",
  },
];

export function Maquinaria() {
  return (
    <section id="maquinaria" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-gradient-primary pointer-events-none absolute -right-32 top-40 size-80 rounded-full opacity-10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
            Nuestro equipo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Maquinaria de Vanguardia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cortadoras por control remoto capaces de trabajar donde otras máquinas no llegan
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border shadow-elevated">
              <video
                src={videoAsset.url}
                controls
                preload="metadata"
                poster={cortadoraAsset.url}
                className="size-full max-h-[640px] w-full bg-black object-cover"
              />
              <span className="glass-dark pointer-events-none absolute top-5 left-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white">
                <Play className="size-3.5 text-lime-glow" />
                En acción
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border shadow-elevated">
              <img
                src={cortadoraAsset.url}
                alt="Cortadora de desbroce con control remoto sobre orugas en un campo verde"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
              />
              <span className="glass-dark pointer-events-none absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs font-bold text-white">
                Cortadora R-C Mower
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border shadow-elevated">
              <img
                src={maquinaAsset.url}
                alt="Desbrozadora roja con orugas y motor de gran potencia sobre hierba"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
              />
              <span className="glass-dark pointer-events-none absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs font-bold text-white">
                Desbrozadora de alto rendimiento
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ventajas.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <span className="bg-gradient-primary grid size-11 place-items-center rounded-xl shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <v.icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-4 text-base font-extrabold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
