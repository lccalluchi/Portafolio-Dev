import { Button } from "@/components/ui/button";

export default function HeroButton() {
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2D9E] to-[#A020F0] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200" />
      <Button
        variant="neon"
        size="lg"
        asChild
        className="relative rounded-lg font-bold uppercase tracking-wider"
      >
        <a href="#experience">Ver Experiencia</a>
      </Button>
    </div>
  );
}
