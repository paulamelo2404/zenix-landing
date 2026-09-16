import { useState } from 'react';
import { produtos, type Produto } from '../data/produtos';
import { categorias } from '../data/categorias';
import { links } from '../utils/whatsapp';
import {
  ArrowRightIcon,
  XMarkIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

function nomeCategoria(id: string): string {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}

export function Produtos() {
  const [produtoAberto, setProdutoAberto] = useState<Produto | null>(null);

  return (
    <>
      <section id="produtos" className="relative py-24 px-6 bg-zenix-cream">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-zenix-rose-dark text-xs font-medium tracking-[0.3em] uppercase">
              Catálogo
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-zenix-ink mt-4 mb-6 leading-tight">
              Conheça nossos produtos
            </h2>
            <p className="text-zenix-warm-gray text-base md:text-lg">
              Cada produto desenvolvido para entregar performance profissional.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white border border-zenix-rose/15 rounded-3xl overflow-hidden hover:border-zenix-rose/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Imagem */}
                <div className="relative aspect-square bg-zenix-blush/40 overflow-hidden">
                  {prod.destaque && (
                    <div className="absolute top-4 left-4 z-10 bg-zenix-rose text-white text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <SparklesIcon className="w-3 h-3" />
                      Destaque
                    </div>
                  )}

                  <img
                    src={prod.imagem}
                    alt={prod.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[0.65rem] text-zenix-rose-dark font-semibold tracking-widest uppercase mb-2">
                    {nomeCategoria(prod.categoria)}
                  </span>

                  <h3 className="font-display text-lg text-zenix-ink mb-2">
                    {prod.nome}
                  </h3>

                  <p className="text-sm text-zenix-warm-gray mb-6 flex-1 leading-relaxed">
                    {prod.descricaoCurta}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setProdutoAberto(prod)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 border border-zenix-ink/20 hover:border-zenix-rose text-zenix-ink hover:text-zenix-rose-dark font-medium tracking-widest uppercase text-xs px-4 py-3 rounded-full transition"
                    >
                      Ver detalhes
                    </button>
                    <a
                      href={links.produto(prod.nome)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-zenix-rose hover:bg-zenix-rose-dark text-white w-11 rounded-full transition"
                      aria-label="Falar no WhatsApp"
                    >
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalhes */}
      {produtoAberto && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-zenix-ink/60 backdrop-blur-sm"
          onClick={() => setProdutoAberto(null)}
        >
          <div
            className="relative bg-zenix-cream rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setProdutoAberto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white hover:bg-zenix-blush border border-zenix-rose/20 flex items-center justify-center text-zenix-ink transition"
              aria-label="Fechar"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="aspect-square bg-zenix-blush/40 overflow-hidden">
                <img
                  src={produtoAberto.imagem}
                  alt={produtoAberto.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:p-10 flex flex-col">
                <span className="text-xs text-zenix-rose-dark font-semibold tracking-widest uppercase mb-2">
                  {nomeCategoria(produtoAberto.categoria)}
                </span>

                <h3 className="font-display text-2xl md:text-3xl text-zenix-ink mb-4">
                  {produtoAberto.nome}
                </h3>

                <p className="text-zenix-warm-gray leading-relaxed mb-8 flex-1">
                  {produtoAberto.descricaoLonga}
                </p>

                <a
                  href={links.produto(produtoAberto.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-zenix-rose hover:bg-zenix-rose-dark text-white font-medium tracking-widest uppercase text-sm px-6 py-3.5 rounded-full transition"
                >
                  Tenho interesse
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}