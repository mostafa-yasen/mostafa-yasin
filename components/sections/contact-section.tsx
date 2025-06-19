import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import { personalData, siteConfig } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: personalData.email,
      href: `mailto:${personalData.email}`,
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: "Phone",
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
    },
    { icon: <MapPin className="h-6 w-6 text-primary" />, label: "Location", value: personalData.location },
  ]

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-800/30" ariaLabelledBy="contact-heading">
      <SectionTitle id="contact-heading" subTitle="Let's Connect">
        Get In Touch
      </SectionTitle>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something
          amazing. Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method) => (
            <div key={method.label} className="flex flex-col items-center p-4 rounded-lg">
              {method.icon}
              <h3 className="mt-2 text-lg font-semibold text-foreground">{method.label}</h3>
              {method.href ? (
                <Link href={method.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {method.value}
                </Link>
              ) : (
                <p className="text-muted-foreground">{method.value}</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
