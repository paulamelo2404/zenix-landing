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
    <section id="contato" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Fale com a gente
          </h2>
          <p className="text-zinc-400 text-lg">
            Estamos prontos pra atender você e tirar todas as dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Coluna esquerda — infos */}
          <div className="space-y-4">
            {infos.map((info) => {
              const Icone = info.icone;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/50 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Icone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-medium truncate">
                      {info.valor}
                    </p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
                </a>
              );
            })}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zenix.professional"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-amber-500/50 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                {/* Ícone do Instagram (Heroicons não tem, então uso SVG inline) */}
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Instagram
                </p>
                <p className="text-white font-medium truncate">
                  @zenix.professional
                </p>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
            </a>

            {/* Horário */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  Horário de Atendimento
                </p>
              </div>
              <div className="space-y-2 pl-1">
                {horarios.map((h) => (
                  <div
                    key={h.dia}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-zinc-400">{h.dia}</span>
                    <span className="text-white font-medium">{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna direita — mapa */}
          <div className="rounded-3xl overflow-hidden border border-zinc-800 min-h-100 bg-zinc-900">
            <iframe
              title="Localização ZENIX Professional"
              src="https://www.google.com/maps?q=Imperatriz+MA&output=embed"
              className="w-full h-full min-h-100"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}