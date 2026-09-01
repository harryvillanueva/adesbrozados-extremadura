import { Facebook, Instagram, Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestros Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#historia" },
  { label: "Pedir Presupuesto", href: "#presupuesto" },
  { label: "Aviso Legal y Privacidad", href: "#presupuesto" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-forest relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="bg-gradient-primary grid size-9 place-items-center rounded-xl">
              <Leaf className="size-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              DESBROZADOS EXTREMADURA
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Especialistas en limpieza y desbroce de fincas, parcelas y terrenos para la prevención y
            el cuidado del medio ambiente.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#presupuesto"
                aria-label="Red social"
                className="glass-dark grid size-10 place-items-center rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold tracking-wide text-white">Enlaces Rápidos</h3>
          <ul className="mt-5 space-y-3">
            {enlaces.map((e) => (
              <li key={e.label}>
                <a
                  href={e.href}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-lime-glow"
                >
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold tracking-wide text-white">Contacto</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lime-glow" />
              Calle José Zorrilla 10, C.P. 10940 Garrovillas de Alconétar (Cáceres)
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-lime-glow" />
              622 77 90 60
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-lime-glow" />
              info@desbrozados-extremadura.es
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © 2024 - 2026 Desbrozados Extremadura. Todos los derechos reservados.
      </div>
    </footer>
  );
}
