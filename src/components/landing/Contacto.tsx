import { useState, type FormEvent } from "react";
import { AlertTriangle, Clock, Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/15";

const labelClass = "mb-1.5 block text-xs font-bold tracking-wide text-foreground";

export function Contacto() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("¡Solicitud enviada correctamente!", {
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
    }, 900);
  };

  return (
    <section id="presupuesto" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="bg-gradient-primary pointer-events-none absolute -right-40 top-40 size-96 rounded-full opacity-10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
            Hablemos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Solicite Presupuesto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contacte con nosotros para una valoración personalizada
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-5">
            <div className="glass-panel rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
              <h3 className="text-sm font-extrabold tracking-wide">Información de Contacto</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  Calle José Zorrilla 10, C.P. 10940 Garrovillas de Alconétar (Cáceres)
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  622 77 90 60 (Atención por llamada o WhatsApp)
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  info@desbrozados-extremadura.es
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
              <h3 className="flex items-center gap-2 text-sm font-extrabold tracking-wide">
                <Clock className="size-4 text-primary" />
                Horario Comercial
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ["Lu - Vi", "08:30 am - 07:30 pm"],
                  ["Sábado", "10:00 am - 02:00 pm"],
                  ["Domingo", "Cerrado"],
                ].map(([d, h]) => (
                  <div key={d} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0">
                    <dt className="font-semibold">{d}</dt>
                    <dd className="text-muted-foreground">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+Jose+Zorrilla+10+Garrovillas+de+Alconetar"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-forest group relative flex items-center justify-between overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <span className="relative">
                <span className="block text-sm font-extrabold text-white">Garrovillas de Alconétar</span>
                <span className="mt-1 block text-xs text-white/60">Ver ubicación en Google Maps</span>
              </span>
              <span className="bg-gradient-primary relative grid size-11 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110">
                <Navigation className="size-5 text-primary-foreground" />
              </span>
            </a>

            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
              <h3 className="flex items-center gap-2 text-sm font-extrabold">
                <AlertTriangle className="size-4 text-primary" />
                Sobre nuestros presupuestos
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Para ofrecerle un precio exacto, es necesario realizar una visita previa para
                comprobar el nivel del terreno, los accesos y el estado general de la vegetación.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 shadow-elevated sm:p-9"
            >
              <div className="grid gap-5">
                <div>
                  <label className={labelClass} htmlFor="nombre">
                    Nombre y Apellidos *
                  </label>
                  <input id="nombre" name="nombre" required className={inputClass} placeholder="Su nombre completo" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="telefono">
                      Teléfono *
                    </label>
                    <input id="telefono" name="telefono" required className={inputClass} placeholder="600 000 000" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Correo Electrónico
                    </label>
                    <input id="email" name="email" type="email" className={inputClass} placeholder="correo@ejemplo.com" />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="tipo">
                    Tipo de terreno *
                  </label>
                  <select id="tipo" name="tipo" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Seleccione una opción...
                    </option>
                    <option>Finca rústica</option>
                    <option>Terreno de cultivo</option>
                    <option>Solar o parcela urbana</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
                  <div>
                    <label className={labelClass} htmlFor="tamano">
                      Tamaño del terreno *
                    </label>
                    <input id="tamano" name="tamano" required className={inputClass} placeholder="Ej: 500" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="unidad">
                      Unidad
                    </label>
                    <select id="unidad" name="unidad" className={inputClass}>
                      <option>Metros Cuadrados (m²)</option>
                      <option>Hectáreas (ha)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="ubicacion">
                    Ubicación exacta del terreno *
                  </label>
                  <input id="ubicacion" name="ubicacion" required className={inputClass} placeholder="Local: idad, polígono, parcela..." />
                </div>

                <div>
                  <label className={labelClass} htmlFor="detalles">
                    Detalles adicionales
                  </label>
                  <textarea id="detalles" name="detalles" rows={4} className={inputClass} placeholder="Cuéntenos el estado del terreno, accesos, plazos..." />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-gradient-primary group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-extrabold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-70"
                >
                  {sending ? "Enviando..." : "Solicitar Presupuesto"}
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
