import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Send, Github, Linkedin, MapPin } from "lucide-react"
import { personalData } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"

export default function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      className="bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Hi, I&apos;m <span className="text-primary">{personalData.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">{personalData.title}</p>
          <div className="flex items-center justify-center md:justify-start text-muted-foreground space-x-2">
            <MapPin className="h-5 w-5" />
            <span>{personalData.location}</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
            {personalData.bio.substring(0, 150)}... {/* Short bio snippet */}
            <Link href="#about" className="text-primary hover:underline ml-1">
              Read more
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <Link href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            src={personalData.profilePicture || "/placeholder.svg"}
            alt={personalData.name}
            width={320}
            height={320}
            priority
            className="rounded-full border-4 border-primary shadow-xl object-cover aspect-square"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
