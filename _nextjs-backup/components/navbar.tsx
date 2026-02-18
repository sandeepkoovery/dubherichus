"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Advantages", href: "#advantages" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg font-serif text-sm font-bold ${
                isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              DM
            </div>
            <div>
              <span
                className={`block text-lg font-bold font-serif leading-tight tracking-tight ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                DUBHE MERAK
              </span>
              <span
                className={`block text-[10px] font-medium uppercase tracking-[0.2em] ${
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Pvt Ltd
              </span>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-b border-border bg-card/98 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <Button asChild className="w-full bg-primary text-primary-foreground">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
