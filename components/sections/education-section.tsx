import { GraduationCap } from "lucide-react"
import { education } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-slate-50 dark:bg-slate-800/30" ariaLabelledBy="education-heading">
      <SectionTitle id="education-heading" subTitle="My Academic Background">
        Education
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
        {education.map((edu) => (
          <Card key={edu.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-1">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-xl font-semibold text-primary">{edu.degree}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{edu.institution}</CardDescription>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {edu.startDate} - {edu.endDate}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.description}</p>
            </CardContent>
          </Card>
        ))}
        <div></div>
        <div></div>
      </div>
    </SectionWrapper>
  )
}
