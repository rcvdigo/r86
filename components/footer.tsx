import Image from "next/image"
import { MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/5511971922305"

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre o Renan" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/r86-logo.png"
                alt="R86 Ar Condicionado Automotivo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <div>
                <p className="text-[var(--brand-navy)] font-bold text-sm tracking-[-0.01em]">R86 Ar Condicionado Automotivo</p>
              </div>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-xs mb-4">
              Especialista em conforto térmico e saúde respiratória automotiva.
              Atendimento humanizado direto com o Renan, via WhatsApp.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebe5d] text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              (11) 97192-2305
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[var(--brand-navy)] font-semibold text-sm mb-4 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--muted-foreground)] hover:text-[var(--brand-blue)] text-sm transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--brand-navy)] font-semibold text-sm mb-4 uppercase tracking-widest">
              Atendimento
            </h4>
            <div className="flex flex-col gap-2.5">
              <p className="text-[var(--muted-foreground)] text-sm">São Paulo & Ibiúna — SP</p>
              <p className="text-[var(--muted-foreground)] text-sm">Seg–Sex: 8h–18h  ·  Sáb: 8h–13h</p>
              <p className="text-[var(--brand-blue)] text-sm font-medium mt-1">
                Atendimento pessoal — sem robôs
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[var(--muted-foreground)] text-xs">
            © {new Date().getFullYear()} R86 Ar Condicionado Automotivo. Todos os direitos reservados.
          </p>
          <p className="text-[var(--muted-foreground)] text-xs">
            São Paulo & Ibiúna — Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
