import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";
// Animation glitch
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });


  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange via-yellow to-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating beautiful, functional web experiences.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" data-testid="loader-projects" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card/50 backdrop-blur-sm rounded-3xl border border-card-border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                data-testid={`project-${project.id}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/30 via-purple/30 to-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-gradient-to-r from-blue/80 to-purple/80 border-blue/50 text-white shadow-md"
                        data-testid={`badge-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue to-purple hover:from-blue/90 hover:to-purple/90 border border-primary-border text-white shadow-md"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        data-testid={`button-live-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.codeUrl, "_blank")}
                        data-testid={`button-code-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!isLoading && (!projects || projects.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground" data-testid="text-no-projects">
              No projects to display yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
