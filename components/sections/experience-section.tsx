import { workExperience } from "@/lib/data"
import SectionWrapper from "@/components/ui/section-wrapper"
import SectionTitle from "@/components/ui/section-title"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-800/30" ariaLabelledBy="experience-heading">
      <SectionTitle id="experience-heading" subTitle="Career Path">
        Work Experience
      </SectionTitle>
      <div className="relative space-y-12">
        {/* Optional: Timeline line */}
        <div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"
          aria-hidden="true"
        ></div>

        {workExperience.map((job, index) => (
          <div key={job.id} className="relative md:flex md:items-start md:gap-8 group">
            {/* Optional: Timeline dot */}
            <div
              className="absolute left-0 md:left-1/2 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 hidden md:block group-hover:scale-125 transition-transform duration-300"
              aria-hidden="true"
            ></div>

            <div className={index % 2 === 0 ? "md:text-left" : "md:text-left md:ml-auto"}>
              {" "}
              {/* Simplified alignment for better readability */}
              <Card className="w-full md:max-w-md lg:max-w-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-primary">{job.role}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">{job.company}</CardDescription>
                    </div>
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-sm"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {job.startDate} - {job.endDate}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
