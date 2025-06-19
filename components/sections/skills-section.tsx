import { skills } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, SquareFunction, Database, Settings2, Users, FlaskConical } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: skills.programmingLanguages,
    icon: <SquareFunction className="h-6 w-6 text-primary" />,
  },
  { title: "Frontend Development", skills: skills.frontend, icon: <Cpu className="h-6 w-6 text-primary" /> },
  { title: "Backend Development", skills: skills.backend, icon: <Database className="h-6 w-6 text-primary" /> },
  { title: "Testing", skills: skills.testing, icon: <FlaskConical className="h-6 w-6 text-primary" /> },
  { title: "Databases", skills: skills.databases, icon: <Database className="h-6 w-6 text-primary" /> },
  {
    title: "Tools & Platforms",
    skills: skills.toolsAndPlatforms,
    icon: <Settings2 className="h-6 w-6 text-primary" />,
  },
  { title: "Methodologies", skills: skills.methodologies, icon: <Users className="h-6 w-6 text-primary" /> },
]

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" ariaLabelledBy="skills-heading">
      <SectionTitle id="skills-heading" subTitle="My Expertise">
        Technical Skills
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-3 pb-4">
              {category.icon}
              <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
