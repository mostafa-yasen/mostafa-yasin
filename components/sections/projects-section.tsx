import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <SectionTitle id="projects-heading" subTitle="My Work">
        Featured Projects
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4 text-muted-foreground line-clamp-3">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              {project.liveLink && project.liveLink !== "#" && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.repoLink && project.repoLink !== "#" && (
                <Button asChild variant="ghost" size="sm">
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
