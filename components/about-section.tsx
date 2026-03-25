"use client"

import Image from "next/image"
import { BadgeCheck, MapPin, MessageCircle, UserCheck } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const WA_LINK = "https://wa.me/5511971922305"

const credentials = [
  { icon: BadgeCheck, text: "Especialista certificado em climatização automotiva" },
  { icon: UserCheck, text: "Você fala diretamente com o Renan — sem assistentes" },
  { icon: MapPin, text: "Atendimento em São Paulo e Ibiúna — SP" },
]

export function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <SectionWrapper id="sobre">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image — com sugestão de foto real */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15">
                {/*
                  FOTO REAL: Substitua /images/about-workshop.jpg
                  por uma foto do Renan na oficina ou trabalhando em um veículo.
                  Exemplo ideal: Renan com uniforme, sorrindo, ferramenta na mão.
                  Transmite confiança e humaniza a marca.
                */}
                <Image
                  src="/images/about-workshop.jpg"
                  alt="Renan Camurça — Especialista R86 em sua oficina"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/20 to-transparent" />
              </div>

              {/* Floating stat card — glass */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 glass rounded-2xl px-5 py-4 shadow-xl border border-white/50">
                <p className="text-2xl font-bold text-[var(--brand-navy)] tracking-[-0.02em]">+10 anos</p>
                <p className="text-[var(--muted-foreground)] text-sm mt-0.5 font-medium">de especialização</p>
              </div>

              {/* Online indicator */}
              <div className="absolute -top-3 -left-3 glass rounded-2xl px-4 py-2.5 shadow-lg border border-white/50 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-[var(--brand-navy)]">Renan disponível agora</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="inline-block text-[var(--brand-blue)] text-sm font-semibold uppercase tracking-widest mb-3">
                Quem é o Renan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-navy)] tracking-[-0.02em] text-balance mb-5 leading-tight">
                Um especialista dedicado ao conforto do seu veículo
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4 tracking-[-0.01em]">
                O <strong className="text-[var(--brand-navy)] font-semibold">Renan Camurça</strong> fundou a R86 Ar Condicionado Automotivo
                com uma proposta diferente: atendimento totalmente humanizado,
                onde você conversa diretamente com o especialista — sem
                recepcionistas, sem chatbots, sem intermediários.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 tracking-[-0.01em]">
                Com mais de 10 anos dedicados à climatização automotiva, o Renan
                traz diagnóstico preciso, transparência total no orçamento e a
                garantia de que o serviço é realizado por quem realmente entende.
              </p>

              <ul className="flex flex-col gap-4 mb-8">
                {credentials.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.text} className="flex items-center gap-3.5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[var(--brand-blue)]/10 shrink-0">
                        <Icon className="w-5 h-5 text-[var(--brand-blue)]" />
                      </div>
                      <span className="text-[var(--brand-navy)] font-medium text-sm tracking-[-0.01em]">{item.text}</span>
                    </li>
                  )
                })}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-light)] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-[var(--brand-blue)]/25 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Falar diretamente com o Renan
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
