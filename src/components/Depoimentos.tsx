import { depoimentos } from '../data/depoimentos';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

// Corações flutuantes decorativos — MAIORES
const coracoesFlutuantes = [
  { left: '5%', delay: 0, duration: 18, size: 80, opacity: 0.12 },
  { left: '15%', delay: 3, duration: 22, size: 60, opacity: 0.10 },
  { left: '28%', delay: 6, duration: 20, size: 100, opacity: 0.14 },
  { left: '42%', delay: 2, duration: 24, size: 70, opacity: 0.11 },
  { left: '55%', delay: 8, duration: 19, size: 90, opacity: 0.13 },
  { left: '68%', delay: 4, duration: 23, size: 65, opacity: 0.10 },
  { left: '82%', delay: 7, duration: 21, size: 95, opacity: 0.14 },
  { left: '94%', delay: 1, duration: 25, size: 55, opacity: 0.09 },
];

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative py-28 px-6 bg-zenix-cream overflow-hidden"
    >
      {/* Corações flutuando no fundo */}
      {coracoesFlutuantes.map((c, i) => (
        <div
          key={i}
          className="absolute bottom-0 pointer-events-none animate-float-up"
          style={{
            left: c.left,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            opacity: c.opacity,
          }}
        >
          <HeartIcon
            className="text-zenix-rose"
            style={{ width: c.size, height: c.size }}
          />
        </div>
      ))}

      {/* Blob orgânico decorativo no fundo */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-zenix-blush rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-zenix-rose/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-zenix-rose-dark text-xs font-medium tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-white rounded-full border border-zenix-rose/25 shadow-sm">
            <HeartIcon className="w-3 h-3 text-zenix-rose animate-gentle-pulse" />
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-zenix-ink mt-2 mb-6 leading-tight">
            Quem usa,{' '}
            <span className="text-zenix-rose italic">se apaixona</span>
          </h2>
          <p className="text-zenix-warm-gray text-base md:text-lg">
            Histórias reais de profissionais que confiam na ZENIX.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((dep, index) => (
            <div
              key={dep.nome}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-zenix-rose/10"
              style={{
                borderTopLeftRadius: index % 2 === 0 ? '2.5rem' : '4rem',
                borderTopRightRadius: index % 2 === 0 ? '4rem' : '2.5rem',
              }}
            >
              {/* Coração decorativo no canto */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-zenix-rose flex items-center justify-center shadow-lg shadow-zenix-rose/30 group-hover:scale-110 transition-transform duration-300">
                <HeartIcon className="w-4 h-4 text-white" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-4 h-4 text-zenix-rose" />
                ))}
              </div>

              {/* Texto */}
              <p className="font-display text-zenix-ink text-lg italic leading-relaxed mb-8 relative">
                <span className="absolute -top-4 -left-2 text-zenix-blush text-5xl font-serif leading-none select-none">
                  "
                </span>
                <span className="relative">{dep.texto}</span>
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-6 border-t border-dashed border-zenix-rose/20">
                <div
                  className="w-14 h-14 bg-linear-to-br from-zenix-rose to-zenix-rose-dark flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-md shadow-zenix-rose/30"
                  style={{
                    borderRadius: '50% 50% 50% 20%',
                  }}
                >
                  {dep.iniciais}
                </div>
                <div>
                  <p className="font-display text-zenix-ink text-base">
                    {dep.nome}
                  </p>
                  <p className="text-xs text-zenix-warm-gray mt-0.5">
                    {dep.profissao} · {dep.cidade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase fofa no final */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 font-display italic text-zenix-warm-gray text-base">
            Feito com
            <HeartIcon className="w-4 h-4 text-zenix-rose animate-gentle-pulse" />
            para quem vive da beleza
          </p>
        </div>
      </div>
    </section>
  );
}