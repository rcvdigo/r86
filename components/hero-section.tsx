import Image from "next/image"
import { ArrowRight, CheckCircle, MessageCircle, Star } from "lucide-react"

const WA_LINK = "https://wa.me/5511971922305"

const highlights = [
  "Atendimento direto com o especialista",
  "Diagnóstico preciso e transparente",
  "Garantia em todos os serviços",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F5F5F7] to-white">
      {/* Background image — right half, expressiva */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full">
          <Image
            src="/images/hero-car-ac.jpg"
            alt="Renan Camurça realizando serviço de ar condicionado automotivo"
            fill
            priority
            className="object-cover opacity-30 lg:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        {/* Ambient orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--brand-blue)]/6 blur-3xl" />
        <div className="absolute bottom-1/3 -left-16 w-80 h-80 rounded-full bg-[var(--brand-blue)]/5 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 pb-32 md:pt-40 md:pb-40 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2.5 glass border border-[var(--brand-blue)]/20 rounded-full px-4 py-2 mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
            <span className="text-[var(--brand-blue)] text-sm font-semibold tracking-[-0.01em]">
              Renan Camurça — Especialista em A/C Automotivo
            </span>
          </div>

          {/* Headline — Apple-grade copy */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--brand-navy)] leading-[1.08] tracking-[-0.025em] text-balance mb-6">
            Especialista em{" "}
            <span className="text-[var(--brand-blue)]">Conforto Térmico</span>{" "}
            e Saúde Respiratória
          </h1>

          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-[520px] tracking-[-0.01em]">
            Higienização, recarga de gás, diagnóstico e manutenção preventiva
            com atendimento humanizado — direto com o Renan, sem intermediários,
            via WhatsApp. Ibiúna — SP.
          </p>

          {/* Social proof row */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-[var(--muted-foreground)] font-medium">+2.000 clientes atendidos em Ibiúna</span>
          </div>

          {/* Highlights */}
          <ul className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[var(--brand-navy)] text-sm font-medium tracking-[-0.01em]">
                <CheckCircle className="w-4 h-4 text-[var(--brand-blue)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA — primary */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base shadow-xl shadow-[var(--brand-blue)]/35 hover:shadow-2xl hover:shadow-[var(--brand-blue)]/45 hover:scale-[1.03] active:scale-95 min-h-[54px]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar agora com o Renan
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--brand-navy)] text-sm font-medium transition-colors py-4"
            >
              Ver serviços
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-7 grid grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { value: "+10 anos", label: "de experiência" },
            { value: "+2.000", label: "clientes atendidos" },
            { value: "100%", label: "atendimento humanizado" },
          ].map((stat) => (
            <div key={stat.value}>
              <p className="text-xl sm:text-2xl font-bold text-[var(--brand-blue)] tracking-[-0.02em]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
