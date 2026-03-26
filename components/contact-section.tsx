"use client"

import Image from "next/image"
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const WA_LINK = "https://wa.me/5511971922305"

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp direto",
    value: "(11) 97192-2305",
    href: WA_LINK,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Ibiúna — SP",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário de atendimento",
    value: "Seg–Sex: 8h–18h",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <SectionWrapper id="contato">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <span className="inline-block text-[var(--brand-blue)] text-sm font-semibold uppercase tracking-widest mb-3">
                Fale com o especialista
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-navy)] tracking-[-0.02em] text-balance mb-5 leading-tight">
                Pronto para respirar ar puro no seu carro?
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 tracking-[-0.01em]">
                Mande uma mensagem agora. O Renan responde pessoalmente,
                avalia o seu caso e agenda o melhor horário sem burocracia.
              </p>

              {/* Contact details */}
              <ul className="flex flex-col gap-5 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[var(--brand-blue)]/10 shrink-0">
                        <Icon className="w-5 h-5 text-[var(--brand-blue)]" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--brand-navy)] font-semibold hover:text-[var(--brand-blue)] transition-colors tracking-[-0.01em]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[var(--brand-navy)] font-semibold tracking-[-0.01em]">{item.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right — CTA card com avatar do Renan */}
            <div className="bg-[#F5F5F7] border border-[var(--border)] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center gap-6 shadow-sm">

              {/*
                FOTO DO RENAN: Substitua /public/placeholder-user.jpg
                por uma foto real do Renan sorrindo com qualidade.
                Avatar circular aqui = humaniza muito o CTA e aumenta conversão.
              */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Renan Camurça — Especialista R86"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Online dot */}
                <span className="absolute bottom-0.5 right-0.5 block w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>

              <div>
                <h3 className="text-[var(--brand-navy)] text-xl font-bold mb-1 tracking-[-0.02em]">
                  Renan Camurça
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm mb-3">Especialista em A/C Automotivo · R86</p>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  Descreva o problema do seu ar condicionado e
                  o Renan responde pessoalmente — rápido, direto e sem enrolação.
                </p>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 w-full text-base min-h-[52px] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-5 h-5" fill="currentColor" />
                Falar agora com o Renan
              </a>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <p className="text-[var(--muted-foreground)] text-xs font-medium">
                  Atendimento pessoal — sem robôs, sem intermediários
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
