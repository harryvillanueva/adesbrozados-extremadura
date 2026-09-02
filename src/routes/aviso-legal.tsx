import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Leaf } from "lucide-react";

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegal,
  head: () => ({
    meta: [
      { title: "Aviso Legal y Privacidad | Desbrozados Extremadura" },
      {
        name: "description",
        content:
          "Aviso legal y política de privacidad de Desbrozados Extremadura. Información sobre el titular del sitio web, condiciones de uso y protección de datos.",
      },
      { property: "og:title", content: "Aviso Legal y Privacidad | Desbrozados Extremadura" },
      {
        property: "og:description",
        content:
          "Información legal, condiciones de uso y política de privacidad de Desbrozados Extremadura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function AvisoLegal() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="bg-gradient-primary grid size-9 place-items-center rounded-xl shadow-glow">
              <Leaf className="size-5 text-primary-foreground" />
            </span>
            <span className="text-sm leading-tight font-extrabold tracking-tight">
              DESBROZADOS
              <span className="block text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">
                EXTREMADURA
              </span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <span className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Legal</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Aviso Legal y Política de Privacidad
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última actualización: septiembre de 2026
        </p>

        <div className="mt-10 space-y-6">
          <Section title="1. Titular del sitio web">
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los datos
              identificativos del titular:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Denominación: Desbrozados Extremadura</li>
              <li>
                Domicilio: Calle José Zorrilla 10, C.P. 10940 Garrovillas de Alconétar (Cáceres)
              </li>
              <li>Teléfono: 622 77 90 60</li>
              <li>Correo electrónico: info@desbrozados-extremadura.es</li>
            </ul>
          </Section>

          <Section title="2. Objeto">
            <p>
              El presente aviso legal regula el acceso, navegación y uso del sitio web de
              Desbrozados Extremadura, cuya finalidad es dar a conocer los servicios de limpieza y
              desbroce de fincas, parcelas y terrenos, así como facilitar el contacto con los
              usuarios interesados en solicitar presupuestos.
            </p>
          </Section>

          <Section title="3. Propiedad intelectual e industrial">
            <p>
              Todos los contenidos de este sitio web (textos, fotografías, vídeos, logotipos, diseño
              gráfico y código fuente) son titularidad de Desbrozados Extremadura o de terceros que
              han autorizado su uso, y están protegidos por la legislación vigente en materia de
              propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o
              transformación sin autorización expresa del titular.
            </p>
          </Section>

          <Section title="4. Responsabilidad">
            <p>
              El titular no se hace responsable de los daños o perjuicios que pudieran derivarse del
              uso indebido de los contenidos de esta web, ni de la información contenida en páginas
              de terceros a las que se pueda acceder mediante enlaces externos.
            </p>
          </Section>

          <Section title="5. Política de privacidad y protección de datos">
            <p>
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
              (LOPDGDD), se informa de que los datos personales facilitados a través del formulario
              de contacto serán tratados por Desbrozados Extremadura con la única finalidad de
              gestionar su solicitud de presupuesto o consulta.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Base jurídica: consentimiento del interesado.</li>
              <li>
                Conservación: los datos se conservarán durante el tiempo necesario para atender la
                solicitud y las obligaciones legales derivadas.
              </li>
              <li>
                Destinatarios: no se cederán datos a terceros, salvo obligación legal.
              </li>
              <li>
                Derechos: puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
                limitación y portabilidad escribiendo a info@desbrozados-extremadura.es.
              </li>
            </ul>
          </Section>

          <Section title="6. Legislación aplicable">
            <p>
              El presente aviso legal se rige por la legislación española. Para cualquier
              controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se
              someten a los juzgados y tribunales que correspondan conforme a derecho.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}
