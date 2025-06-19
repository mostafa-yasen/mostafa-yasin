import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { personalData, siteConfig } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.links.github && (
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          )}
          {siteConfig.links.linkedin && (
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}
