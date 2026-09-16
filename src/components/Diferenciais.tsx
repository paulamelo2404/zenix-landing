import { useRef, useState } from 'react';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

const diferenciais = [
  {
    icone: ShieldCheckIcon,
    titulo: 'Exclusivo para profissionais',
    descricao:
      'Não vendemos ao consumidor final. Nosso único canal são salões e revendedoras credenciadas.',
  },
  {
    icone: UserGroupIcon,
    titulo: 'Parceria que transforma',
    descricao:
      'Crescemos junto com quem usa nossos produtos. Sua clientela não encontra a ZENIX em qualquer lugar.',
  },
  {
    icone: SparklesIcon,
    titulo: 'Qualidade que se vê',
    descricao:
      'Fórmulas desenvolvidas para alta performance em salão, com resultado profissional de verdade.',
  },
  {
    icone: ChatBubbleLeftRightIcon,
    titulo: 'Atendimento próximo',
    descricao:
      'Suporte direto, ágil e humano. Aqui você fala com quem entende de cosmético profissional.',
  },
];

export function Diferenciais() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 border-y border-zenix-rose/20 overflow-hidden bg-zenix-rose/30"
    >
      {/* Gradiente rosa escuro fixo no topo */}
      <div className="absolute inset-0 bg-linear-to-b from-zenix-rose-dark/90 via-zenix-rose/40 to-zenix-rose/20 pointer-events-none" />

      {/* Spotlight rosa que segue o mouse */}
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(700px circle at ${pos.x}% ${pos.y}%, rgba(183, 110, 130, 0.6), transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-white text-xs font-semibold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/30">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-6 leading-tight drop-shadow-lg">
            Por que a ZENIX é diferente?
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Mais do que produtos, entregamos uma parceria real com quem vive da
            beleza.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {diferenciais.map((item) => {
            const Icone = item.icone;
            return (
              <div
                key={item.titulo}
                className="group relative flex gap-5 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-7 shadow-2xl shadow-black/40 hover:bg-zinc-900 hover:border-zenix-rose/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Glow rosa no canto no hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenix-rose/0 group-hover:bg-zenix-rose/15 blur-3xl rounded-full transition-all duration-500 pointer-events-none" />

                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-zenix-rose/15 border border-zenix-rose/30 flex items-center justify-center text-zenix-rose transition-all duration-300 group-hover:bg-zenix-rose group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-zenix-rose/50">
                    <Icone className="w-6 h-6" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display text-lg text-white mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faixa de impacto */}
        <div className="relative rounded-4xl overflow-hidden bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/40 p-10 md:p-14 text-center">
          {/* Glow rosa no topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-zenix-rose/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              Pronto pra fazer parte da ZENIX?
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Se você é cabeleireira, barbeiro, salão ou revendedora, essa
              parceria foi feita pra você.
            </p>
            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zenix-rose hover:bg-zenix-rose-dark text-white font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl hover:shadow-zenix-rose/50"
            >
              Quero ser parceiro(a)
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}