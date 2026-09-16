import { categorias } from '../data/categorias';
import { links } from '../utils/whatsapp';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function Categorias() {
  return (
    <section id="categorias" className="relative py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Nossas Linhas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Linhas profissionais para cada necessidade
          </h2>
          <p className="text-zinc-400 text-lg">
            Do tratamento à coloração, cada linha foi pensada para entregar
            resultado de salão.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <a
              key={cat.id}
              href={links.produto(cat.nome)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Brilho no hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-300" />

              <div className="relative">
                {/* Emoji/ícone */}
                <div className="text-4xl mb-4">{cat.emoji}</div>

                {/* Nome */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition">
                  {cat.nome}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {cat.descricao}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-1 text-sm text-amber-400 font-medium">
                  Saber mais
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}