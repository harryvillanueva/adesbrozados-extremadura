import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#historia" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass-panel w-[94%]" : "w-[96%] border border-transparent",
        )}
      >
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="bg-gradient-primary flex size-9 items-center justify-center rounded-xl shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Leaf className="size-5 text-primary-foreground" />
          </span>
          <span className="text-sm leading-tight font-extrabold tracking-tight">
            DESBROZADOS
            <span className="block text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">
              EXTREMADURA
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#presupuesto"
            className="bg-gradient-primary hidden rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 sm:inline-flex"
          >
            Pedir Presupuesto
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mx-auto mt-2 w-[94%] rounded-3xl p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#presupuesto"
            onClick={() => setOpen(false)}
            className="bg-gradient-primary mt-1 block rounded-2xl px-4 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Pedir Presupuesto
          </a>
        </div>
      )}
    </header>
  );
}
