import { depoimentos } from '../data/depoimentos';
import { StarIcon } from '@heroicons/react/24/solid';

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Quem usa, recomenda
          </h2>
          <p className="text-zinc-400 text-lg">
            Veja o que profissionais e revendedoras falam sobre a ZENIX.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((dep) => (
            <div
              key={dep.nome}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-amber-500/40 transition"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-zinc-300 leading-relaxed mb-8 flex-1 italic">
                "{dep.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-bold">
                  {dep.iniciais}
                </div>
                <div>
                  <p className="font-semibold text-white">{dep.nome}</p>
                  <p className="text-xs text-zinc-500">
                    {dep.profissao} • {dep.cidade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}