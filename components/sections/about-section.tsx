import Image from "next/image"
import { personalData } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"

export default function AboutSection() {
  return (
    <SectionWrapper id="about" ariaLabelledBy="about-heading">
      <SectionTitle id="about-heading" subTitle="My Introduction">
        About Me
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src={personalData.profilePicture || "/placeholder.svg"} // Using the same profile picture or a different one
            alt={`${personalData.name} - Professional`}
            width={280}
            height={280}
            className="rounded-lg shadow-lg object-cover aspect-square"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">A bit more about my journey...</h3>
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{personalData.bio}</p>
          {/* Optional: Add some key facts or values here */}
          {/* <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary" /> 5+ Years of Experience</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary" /> Passionate about Clean Code</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary" /> Lifelong Learner</li>
          </ul> */}
        </div>
      </div>
    </SectionWrapper>
  )
}
