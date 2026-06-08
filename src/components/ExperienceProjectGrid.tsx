import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ZoomIn } from "lucide-react";

type Project = {
  name: string;
  description: string;
  image: { src: string; width: number; height: number };
  technologies: string[];
  link: string;
};

export default function ExperienceProjectGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.name}
            onClick={() => setSelected(project)}
            className="cursor-pointer bg-background/60 backdrop-blur-sm border-accent/20 hover:border-accent/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-2 transition-all duration-300 overflow-hidden group p-0 gap-0"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-background to-background/80 overflow-hidden">
              <div className="absolute inset-0 bg-background/60" />
              <img
                src={project.image.src}
                alt={project.name}
                width={project.image.width}
                height={project.image.height}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
                <span
                  className="text-2xl text-accent font-bold"
                  style={{ textShadow: "0 0 10px rgba(0,240,255,0.7), 0 0 20px rgba(0,240,255,0.5)" }}
                >
                  {project.name.split(" ")[0]}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 border border-primary/30 z-30 opacity-80">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Tech tags */}
            <CardContent className="p-4 md:p-5">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project detail modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-background border-primary/30 max-w-xs sm:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[85vh] overflow-y-auto shadow-[0_0_20px_rgba(255,45,158,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/[0.08] rounded-xl pointer-events-none" />
          <DialogHeader className="relative">
            <DialogTitle className="text-white text-lg sm:text-xl truncate">
              {selected?.name}
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <div className="relative flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Image */}
              <div className="lg:col-span-2">
                <div
                  className="relative rounded-lg overflow-hidden border border-accent/20 cursor-pointer group bg-background/30"
                  onClick={() => setImageOpen(true)}
                >
                  <img
                    src={selected.image.src}
                    alt={selected.name}
                    className="w-full h-52 sm:h-64 lg:h-72 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent group-hover:from-background/50 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-primary/95 backdrop-blur-sm rounded-full p-3 sm:p-4 border-2 border-white/90 shadow-[0_0_25px_rgba(255,45,158,0.8)] scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-background/90 rounded-md px-2 py-1 opacity-70 group-hover:opacity-100 transition-opacity border border-primary/20">
                    <span className="text-xs text-primary font-medium hidden sm:inline">Click para ampliar</span>
                    <span className="text-xs text-primary font-medium sm:hidden">Ampliar</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-1 space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-accent mb-2 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                    Descripción
                  </h4>
                  <div className="bg-background/40 p-3 rounded-lg border border-accent/20 backdrop-blur-sm">
                    <DialogDescription className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                      {selected.description}
                    </DialogDescription>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-secondary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2 flex-shrink-0" />
                    Tecnologías
                  </h4>
                  <div className="bg-background/40 p-3 rounded-lg border border-secondary/20 backdrop-blur-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {selected.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm bg-accent/10 text-accent rounded-full border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 lg:pt-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    asChild
                    className="w-full shadow-[0_0_15px_rgba(255,45,158,0.4)] hover:shadow-[0_0_25px_rgba(255,45,158,0.6)] hover:scale-105"
                  >
                    <a href={selected.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image zoom modal */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="bg-background/95 border-primary/30 max-w-[85vw] p-2 overflow-hidden">
          <DialogTitle className="sr-only">Imagen ampliada</DialogTitle>
          {selected && (
            <img
              src={selected.image.src}
              alt={selected.name}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-primary/30 shadow-[0_0_40px_rgba(255,45,158,0.3)]"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
