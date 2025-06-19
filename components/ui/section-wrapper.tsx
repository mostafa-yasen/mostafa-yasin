import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
  ariaLabelledBy?: string
}

const SectionWrapper = ({ children, id, className, ariaLabelledBy }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy || `${id}-heading`}
      className={cn("py-16 md:py-20 lg:py-24", className)}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  )
}

export default SectionWrapper
