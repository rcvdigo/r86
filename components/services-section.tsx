"use client"

import {
  Wind,
  Thermometer,
  Search,
  Filter,
  ShieldCheck,
  Wrench,
  Droplets,
  Car,
} from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const WA_LINK = "https://wa.me/5511971922305"

const services = [
  {
    icon: Wind,
    title: "Purificação do Ar Interno",
    description:
      "Eliminação profunda de fungos, bactérias e odores do sistema de climatização. Ar limpo, saudável e livre de alérgenos para você e sua família.",
    highlight: true,
  },
  {
    icon: Thermometer,
    title: "Recarga de Gás Refrigerante",
    description:
      "Reposição precisa do fluido R134a ou R1234yf com equipamento homologado. Rendimento máximo e economia garantidos.",
    highlight: false,
  },
  {
    icon: Search,
    title: "Análise Técnica Completa",
    description:
      "Diagnóstico detalhado do compressor, condensador, evaporador e conexões. Identificamos falhas antes que virem problemas maiores.",
    highlight: false,
  },
  {
    icon: Filter,
    title: "Troca de Filtro de Cabine",
    description:
      "Substituição do filtro de ar com peça de qualidade OEM. Protege o sistema e garante a pureza do ar que você respira.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    description:
      "Revisão periódica de todos os componentes para evitar panes e prolongar a vida útil do sistema — economize antes que quebre.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Manutenção Geral Automotiva",
    description:
      "Cuidado completo do seu veículo: suspensão, freios, motor e mais. Uma oficina de confiança para tudo.",
    highlight: false,
  },
  {
    icon: Droplets,
    title: "Troca de Óleo com Laudo",
    description:
      "Troca de óleo e filtro com lubrificantes de alta performance. Relatório completo do estado do motor entregue pelo Renan.",
    highlight: false,
  },
  {
    icon: Car,
    title: "Revisão Geral Documentada",
    description:
      "Checklist completo do veículo com laudo detalhado. Segurança e desempenho certificados por um especialista.",
    highlight: false,
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <SectionWrapper id="servicos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[var(--brand-blue)] text-sm font-semibold uppercase tracking-widest mb-3">
              O que fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] tracking-[-0.02em] text-balance mb-4">
              Serviços Especializados
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-xl mx-auto leading-relaxed">
              Cada serviço é realizado pessoalmente pelo Renan, com técnica apurada,
              equipamentos modernos e total transparência no diagnóstico.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 ${
                    service.highlight
                      ? "bg-gradient-to-br from-[var(--brand-blue)] to-[oklch(0.42_0.22_260)] text-white shadow-2xl shadow-[var(--brand-blue)]/30"
                      : "bg-[#F5F5F7] hover:bg-white border border-transparent hover:border-[var(--border)] hover:shadow-xl hover:shadow-black/5"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                      service.highlight
                        ? "bg-white/20"
                        : "bg-[var(--brand-blue)]/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        service.highlight
                          ? "text-white"
                          : "text-[var(--brand-blue)]"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-base mb-2 leading-snug tracking-[-0.01em] ${
                        service.highlight ? "text-white" : "text-[var(--brand-navy)]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        service.highlight ? "text-white/80" : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[var(--brand-blue)]/25 hover:shadow-xl hover:shadow-[var(--brand-blue)]/35 hover:scale-[1.02] active:scale-95"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
