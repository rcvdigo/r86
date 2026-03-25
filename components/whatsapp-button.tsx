"use client"

import { MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/5511971922305"

export function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Renan no WhatsApp"
      className="group fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-40 flex items-center gap-0 hover:gap-3 overflow-hidden rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.05] active:scale-95 h-14 sm:h-16 px-4 sm:px-5 w-14 sm:w-16 hover:w-[200px] sm:hover:w-[220px]"
    >
      <MessageCircle
        className="w-6 h-6 sm:w-7 sm:h-7 text-white shrink-0"
        fill="white"
        strokeWidth={0}
      />
      <span className="text-white font-semibold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75 overflow-hidden">
        Falar com o Renan
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full ring-2 ring-[#25D366]/50 animate-ping group-hover:hidden" />
    </a>
  )
}
