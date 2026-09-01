import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Servicios } from "@/components/landing/Servicios";
import { Historia } from "@/components/landing/Historia";
import { Faq } from "@/components/landing/Faq";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desbrozados Extremadura | Limpieza y Desbroce de Fincas" },
      {
        name: "description",
        content:
          "Desbroce y limpieza profesional de fincas, parcelas y solares en toda Extremadura. Prevención de incendios, maquinaria propia y presupuesto a medida.",
      },
      { property: "og:title", content: "Desbrozados Extremadura | Limpieza y Desbroce de Fincas" },
      {
        property: "og:description",
        content:
          "Especialistas en limpieza y desbroce de terrenos en Cáceres y Badajoz. Solicite su presupuesto sin compromiso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Historia />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
