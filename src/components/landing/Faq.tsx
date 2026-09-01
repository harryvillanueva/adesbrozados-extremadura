import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import faqImg from "@/assets/faq-bosque.jpg";

const faqs = [
  {
    q: "¿Cómo calculan el precio del servicio?",
    a: "El precio depende de la superficie del terreno, la densidad de la vegetación, la accesibilidad de la maquinaria y la pendiente. Realizamos una visita previa para darle un precio cerrado sin sorpresas.",
  },
  {
    q: "¿Cuáles son las formas de pago aceptadas?",
    a: "Aceptamos transferencia bancaria, Bizum y efectivo. Para trabajos de gran superficie ofrecemos pago fraccionado en dos plazos.",
  },
  {
    q: "¿En qué zonas prestan servicio?",
    a: "Trabajamos en toda Extremadura (Cáceres y Badajoz) y provincias limítrofes, desplazándonos a cualquier punto de la región.",
  },
  {
    q: "¿Por qué es importante desbrozar en Extremadura?",
    a: "El clima seco y las altas temperaturas convierten la maleza en combustible. Desbrozar reduce drásticamente el riesgo de incendio, cumple la normativa y protege sus construcciones y cultivos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={faqImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="bg-gradient-forest absolute inset-0 opacity-95" />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-bold tracking-[0.28em] text-lime-glow uppercase">
            Dudas frecuentes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Resolvemos las dudas más habituales sobre nuestro trabajo
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass-dark rounded-2xl border-0 px-5 transition-all duration-300 hover:bg-white/15"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-bold text-white hover:no-underline sm:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-white/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
