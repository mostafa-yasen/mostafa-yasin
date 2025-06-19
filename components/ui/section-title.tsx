import type React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  id?: string
  children: React.ReactNode
  className?: string
  subTitle?: string
}

const SectionTitle = ({ id, children, className, subTitle }: SectionTitleProps) => {
  return (
    <div className="mb-10 md:mb-16 text-center">
      {subTitle && <p className="text-base font-semibold text-primary tracking-wide uppercase mb-2">{subTitle}</p>}
      <h2
        id={id}
        className={cn("text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl", className)}
      >
        {children}
      </h2>
    </div>
  )
}
export default SectionTitle
