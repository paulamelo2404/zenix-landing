import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

const infos = [
  {
    icone: PhoneIcon,
    label: 'WhatsApp',
    valor: '+55 63 9206-8388',
    href: links.parceiro,
  },
  {
    icone: EnvelopeIcon,
    label: 'E-mail',
    valor: 'zenixbelezaprofissional@gmail.com',
    href: 'mailto:zenixbelezaprofissional@gmail.com',
  },
  {
    icone: MapPinIcon,
    label: 'Localização',
    valor: 'Imperatriz / MA',
    href: 'https://maps.google.com/?q=Imperatriz+MA',
  },
];

const horarios = [
  { dia: 'Segunda a Sábado', hora: '08:00 — 21:00' },
  { dia: 'Domingo', hora: 'Somente com agendamento' },
];

export function Contato() {
  return (
    <section id="contato" className="relative py-28 px-6 bg-zenix-cream">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-zenix-rose-dark text-xs font-medium tracking-[0.3em] uppercase">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-zenix-ink mt-4 mb-6 leading-tight">
            Fale com a gente
          </h2>
          <p className="text-zenix-warm-gray text-base md:text-lg">
            Estamos prontos pra atender você e tirar todas as dúvidas.
          </p>
        </div>

        {/* Grid de contatos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {/* WhatsApp */}
          <a
            href={infos[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-zenix-rose-dark backdrop-blur-xl border border-zenix-rose-dark rounded-3xl p-6 shadow-2xl shadow-zenix-rose-dark/40 hover:bg-zenix-rose hover:border-zenix-rose hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:bg-white group-hover:text-zenix-rose-dark group-hover:scale-110 group-hover:shadow-lg">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <p className="text-[0.7rem] text-white/60 uppercase tracking-widest mb-2">
              WhatsApp
            </p>
            <p className="text-white font-medium mb-4 wrap-break-word">
              +55 63 9206-8388
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
              Chamar
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {/* E-mail */}
          <a
            href={infos[1].href}
            className="group flex flex-col bg-zenix-rose-dark backdrop-blur-xl border border-zenix-rose-dark rounded-3xl p-6 shadow-2xl shadow-zenix-rose-dark/40 hover:bg-zenix-rose hover:border-zenix-rose hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:bg-white group-hover:text-zenix-rose-dark group-hover:scale-110 group-hover:shadow-lg">
              <EnvelopeIcon className="w-5 h-5" />
            </div>
            <p className="text-[0.7rem] text-white/60 uppercase tracking-widest mb-2">
              E-mail
            </p>
            <p className="text-white font-medium mb-4 break-all text-sm">
              zenixbelezaprofissional@gmail.com
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
              Enviar
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {/* Localização */}
          <a
            href={infos[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-zenix-rose-dark backdrop-blur-xl border border-zenix-rose-dark rounded-3xl p-6 shadow-2xl shadow-zenix-rose-dark/40 hover:bg-zenix-rose hover:border-zenix-rose hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-5 transition-all duration-300 group-hover:bg-white group-hover:text-zenix-rose-dark group-hover:scale-110 group-hover:shadow-lg">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <p className="text-[0.7rem] text-white/60 uppercase tracking-widest mb-2">
              Localização
            </p>
            <p className="text-white font-medium mb-4">
              Imperatriz / MA
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
              Ver no mapa
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/zenix.professional"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-zenix-rose-dark backdrop-blur-xl border border-zenix-rose-dark rounded-3xl p-6 shadow-2xl shadow-zenix-rose-dark/40 hover:bg-zenix-rose hover:border-zenix-rose hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:border-transparent group-hover:scale-110 group-hover:shadow-lg">
              <svg
                className="w-5 h-5 text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <p className="text-[0.7rem] text-white/60 uppercase tracking-widest mb-2">
              Instagram
            </p>
            <p className="text-white font-medium mb-4 wrap-break-word">
              @zenix.professional
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors duration-300">
              Seguir
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Card de horário — largura total */}
        <div className="bg-zenix-rose-dark backdrop-blur-xl border border-zenix-rose-dark rounded-3xl p-6 md:p-8 shadow-2xl shadow-zenix-rose-dark/40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
              <ClockIcon className="w-5 h-5 text-white" />
            </div>
            <p className="text-[0.7rem] text-white/70 uppercase tracking-widest">
              Horário de Atendimento
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {horarios.map((h) => (
              <div
                key={h.dia}
                className="flex justify-between items-center gap-4 py-3 border-b border-dashed border-white/20 last:border-0 sm:last:border-b sm:last:pb-3"
              >
                <span className="text-white/80 text-sm">{h.dia}</span>
                <span className="text-white font-medium text-sm">
                  {h.hora}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}