import { Button } from "@/components/ui/button";

export default function HeroButton() {
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200" />
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
