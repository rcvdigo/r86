"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/5511971922305"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre o Renan" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/r86-logo.png"
            alt="R86 Ar Condicionado Automotivo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--brand-navy)] transition-colors duration-200 font-medium tracking-[-0.01em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white text-sm font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-md shadow-[var(--brand-blue)]/30 hover:shadow-lg hover:shadow-[var(--brand-blue)]/40 hover:scale-[1.02] active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          Falar com o Renan
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--brand-navy)] p-2 -mr-2 rounded-xl transition-colors hover:bg-[var(--brand-blue)]/8"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer — glass */}
      {open && (
        <div className="md:hidden glass border-t border-white/30 px-4 sm:px-6 pb-8 pt-4 shadow-xl shadow-black/10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center text-base text-[var(--brand-navy)] hover:bg-[var(--brand-blue)]/8 transition-colors font-medium py-3 px-3 rounded-xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-5 py-4 rounded-2xl w-full transition-all min-h-[52px] shadow-lg shadow-[var(--brand-blue)]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com o Renan no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
