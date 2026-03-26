"use client"

import {
  Zap,
  ShieldCheck,
  BadgeDollarSign,
  MessageCircle,
  UserCheck,
  Gauge,
} from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const benefits = [
  {
    icon: UserCheck,
    title: "Atendimento Humanizado e Personalizado",
    description:
      "Na R86, você não fala com atendente nem robô. O contato é direto, humano e pensado para resolver o seu problema de verdade.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia em Todos os Serviços",
    description:
      "Cada serviço realizado pela R86 tem garantia. Entregamos qualidade com responsabilidade — sem burocracia.",
  },
  {
    icon: BadgeDollarSign,
    title: "Orçamento Transparente",
    description:
      "Preço claro, sem surpresas. Você aprova o orçamento antes de qualquer serviço ser iniciado.",
  },
  {
    icon: MessageCircle,
    title: "Agendamento Simples pelo WhatsApp",
    description:
      "Sem filas, sem formulários. Agende, tire dúvidas e acompanhe o serviço direto pelo WhatsApp, no seu tempo.",
  },
  {
    icon: Zap,
    title: "Diagnóstico Rápido e Preciso",
    description:
      "A R86 identifica o problema com agilidade e apresenta a solução de forma clara antes de qualquer intervenção.",
  },
  {
    icon: Gauge,
    title: "Equipamentos Homologados",
    description:
      "Utilizamos máquinas de última geração para diagnóstico e recarga de gás, garantindo precisão técnica em cada serviço.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-[#F5F5F7] py-24 md:py-32">
      <SectionWrapper id="diferenciais">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-16">
            <span className="inline-block text-[var(--brand-blue)] text-sm font-semibold uppercase tracking-widest mb-3">
              Por que escolher a R86
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] tracking-[-0.02em] text-balance mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
              A R86 Ar Condicionado Automotivo une técnica especializada,
              atendimento humanizado e transparência total — do diagnóstico à entrega.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="group bg-white hover:shadow-xl border border-[var(--border)] hover:border-[var(--brand-blue)]/20 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--brand-blue)]/10 mb-5 group-hover:bg-[var(--brand-blue)]/18 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--brand-blue)]" />
                  </div>
                  <h3 className="text-[var(--brand-navy)] font-semibold text-base mb-2.5 tracking-[-0.01em] leading-snug">{benefit.title}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
