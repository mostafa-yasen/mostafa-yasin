import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import EducationSection from "@/components/sections/education-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
