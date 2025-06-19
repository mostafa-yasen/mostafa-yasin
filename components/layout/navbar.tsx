"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { navLinks, personalData } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      let currentSection = ""
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1))
        if (section && section.offsetTop <= window.scrollY + 100) {
          // 100px offset
          currentSection = link.href
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinkItem = ({
    href,
    label,
    icon: Icon,
    onClick,
  }: { href: string; label: string; icon?: React.ElementType; onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        activeSection === href ? "text-primary" : "text-muted-foreground",
      )}
    >
      {Icon && <Icon className="mr-2 h-4 w-4 inline-block md:hidden lg:inline-block" />}
      {label}
    </Link>
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{personalData.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex justify-between items-center mb-6">
                <Link href="#hero" className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">{personalData.name.split(" ")[0]}</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close navigation menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavLinkItem href={link.href} label={link.label} icon={link.icon} />
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
