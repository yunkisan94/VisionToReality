import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
  
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="inline-block pb-2 border-b-4 border-primary">프로젝트 & 작품</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            최근에 작업한 프로젝트들을 소개합니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-white text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dark-800 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-700 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              더 많은 프로젝트 보기
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
