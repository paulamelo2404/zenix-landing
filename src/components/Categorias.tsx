import { useRef, useState } from 'react';
import {
  SparklesIcon,
  HomeIcon,
  BoltIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { categorias } from '../data/categorias';
import { links } from '../utils/whatsapp';

const iconesPorCategoria: Record<string, React.ComponentType<{ className?: string }>> = {
  royalplastia: SparklesIcon,
  'home-care': HomeIcon,
  cpr: BoltIcon,
  'linha-4': StarIcon,
};

export function Categorias() {
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
      id="categorias"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 border-y border-zenix-rose/20 overflow-hidden bg-zenix-rose/30"
    >
      {/* Gradiente rosa escuro fixo no topo */}
      <div className="absolute inset-0 bg-linear-to-b from-zenix-rose-dark/90 via-zenix-rose/40 to-zenix-rose/20 pointer-events-none" />

      {/* Spotlight rosa que segue o mouse (mais sutil) */}
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
            Nossas Linhas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-6 leading-tight drop-shadow-lg">
            Linhas profissionais para cada necessidade
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Do tratamento à coloração, cada linha foi desenvolvida com alta
            tecnologia para entregar resultado impecável de salão.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat, index) => {
            const Icone = iconesPorCategoria[cat.id] ?? SparklesIcon;
            return (
              <a
                key={cat.id}
                href={links.produto(cat.nome)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40 hover:bg-zinc-900 hover:border-zenix-rose/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Glow rosa no topo no hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-zenix-rose/0 group-hover:bg-zenix-rose/20 blur-3xl rounded-full transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Cabeçalho do card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-zenix-rose/15 border border-zenix-rose/30 flex items-center justify-center text-zenix-rose transition-all duration-300 group-hover:bg-zenix-rose group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-zenix-rose/50">
                      <Icone className="w-6 h-6" />
                    </div>

                    <span className="font-display text-4xl text-zinc-700 group-hover:text-zenix-rose/60 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Nome */}
                  <h3 className="font-display text-xl text-white mb-3">
                    {cat.nome}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                    {cat.descricao}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative pt-4 border-t border-zinc-800 group-hover:border-zenix-rose/30 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-zinc-500 group-hover:text-zenix-rose transition-colors duration-300">
                  <span>Saber mais</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}