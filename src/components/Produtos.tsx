import { produtos } from '../data/produtos';
import { categorias } from '../data/categorias';
import { links } from '../utils/whatsapp';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';

// Função auxiliar: pega o nome da categoria pelo id
function nomeCategoria(id: string): string {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}

export function Produtos() {
  return (
    <section id="produtos" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Conheça nossos produtos
          </h2>
          <p className="text-zinc-400 text-lg">
            Cada produto foi desenvolvido para entregar performance profissional.
            Toque em qualquer um pra falar com a gente no WhatsApp.
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((prod) => (
            <div
              key={prod.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Imagem placeholder */}
              <div className="relative aspect-square bg-linear-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                {/* Badge de destaque */}
                {prod.destaque && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <StarIcon className="w-3 h-3" />
                    Destaque
                  </div>
                )}

                {/* Placeholder visual — trocaremos por imagem real */}
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-30">🧴</div>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest">
                    Imagem em breve
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                {/* Categoria */}
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
                  {nomeCategoria(prod.categoria)}
                </span>

                {/* Nome */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {prod.nome}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-zinc-400 mb-6 flex-1">
                  {prod.descricao}
                </p>

                {/* CTA */}
                <a
                  href={links.produto(prod.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-5 py-2.5 rounded-full transition group/btn"
                >
                  Tenho interesse
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}