
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#certificates", label: "Certificados" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 border border-[#FF2D9E]/30 rounded-lg text-[#FF2D9E] hover:border-[#FF2D9E] transition-colors"
          aria-label="Menú principal"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-72 bg-[#0F0F0F]/95 backdrop-blur-md border-l border-[#FF2D9E]/20 p-0"
      >
        {/* Borde superior neón */}
        <div className="h-px w-full bg-gradient-to-r from-[#FF2D9E] via-[#A020F0] to-[#00F0FF]" />

        {/* Logo dentro del sheet */}
        <div className="px-6 pt-6 pb-4 border-b border-[#FF2D9E]/10">
          <span className="text-lg font-bold text-[#FF2D9E] tracking-wider">Luis</span>
          <span className="text-xs text-[#00F0FF] block tracking-wider">Ccalluchi</span>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="group relative flex items-center py-3 px-3 text-white hover:text-[#FF2D9E] font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg hover:bg-[#FF2D9E]/5"
            >
              {/* Línea lateral activa en hover */}
              <span className="absolute left-0 w-0.5 h-full bg-gradient-to-b from-[#FF2D9E] to-[#A020F0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="ml-2">{label}</span>
            </a>
          ))}
        </nav>

        {/* Footer del sheet */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF2D9E] via-[#A020F0] to-[#00F0FF] opacity-30" />
      </SheetContent>
    </Sheet>
  );
}
