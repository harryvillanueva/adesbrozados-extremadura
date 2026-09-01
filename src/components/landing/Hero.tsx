import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-campo.jpg";

const stats = [
  { value: "+500", label: "Fincas desbrozadas" },
  { value: "24/48h", label: "Respuesta media" },
  { value: "100%", label: "Maquinaria propia" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Tractor desbrozando un campo verde en Extremadura al atardecer"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.05_158/0.82),oklch(0.16_0.05_158/0.55)_45%,oklch(0.16_0.05_158/0.92))]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white/90 animate-float-slow">
          <Sparkles className="size-4 text-lime-glow" />
          Limpieza y desbroce profesional en toda Extremadura
        </span>

        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Especialistas en Limpieza y{" "}
          <span className="text-gradient-green">Desbroce en Extremadura</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Cuidamos tu terreno. Prevención, mantenimiento y limpieza profesional de fincas, parcelas
          y zonas urbanas.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10"
          >
            Ver Servicios
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/34622779060"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <MessageCircle className="size-4" />
            WhatsApp 622 77 90 60
          </a>
        </div>

        <dl className="glass-dark mt-16 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-3xl sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5">
              <dt className="text-2xl font-extrabold text-white">{s.value}</dt>
              <dd className="mt-1 text-xs font-medium tracking-wide text-white/65">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
