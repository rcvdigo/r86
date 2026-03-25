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
    title: "Especialista Direto, Sem Intermediários",
    description:
      "Você conversa pelo WhatsApp direto com o Renan. Diagnóstico, orçamento e atendimento feito por quem realmente sabe.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia Real nos Serviços",
    description:
      "Todos os serviços possuem garantia. Se algo não estiver certo, o Renan resolve — sem burocracia.",
  },
  {
    icon: BadgeDollarSign,
    title: "Orçamento Transparente",
    description:
      "Preço claro, sem surpresas. Você aprova tudo antes de qualquer serviço ser realizado.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Humanizado via WhatsApp",
    description:
      "Tire dúvidas, acompanhe o serviço e receba orientações técnicas diretamente pelo WhatsApp — sem robôs.",
  },
  {
    icon: Zap,
    title: "Agendamento Ágil e Flexível",
    description:
      "Sem filas ou tempo perdido. Agende pelo WhatsApp no horário que for melhor para você.",
  },
  {
    icon: Gauge,
    title: "Equipamentos de Última Geração",
    description:
      "Máquinas homologadas para diagnóstico e recarga de gás. Precisão técnica em cada procedimento.",
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
              O diferencial R86 Ar Condicionado
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] tracking-[-0.02em] text-balance mb-4">
              Por que o Renan é diferente
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
              Não é só um serviço de ar condicionado. É um especialista comprometido
              com o seu conforto — e que você pode chamar quando quiser.
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
