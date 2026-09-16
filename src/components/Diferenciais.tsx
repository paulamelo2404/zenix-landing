import {
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
  return (
    <section className="relative py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Por que a ZENIX é diferente?
          </h2>
          <p className="text-zinc-400 text-lg">
            Mais do que produtos, entregamos uma parceria real com quem vive da
            beleza.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {diferenciais.map((item) => {
            const Icone = item.icone;
            return (
              <div
                key={item.titulo}
                className="flex gap-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/40 transition"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Icone className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faixa de impacto */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-linear-to-br from-amber-500/10 via-zinc-900 to-zinc-900 p-10 md:p-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-100 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
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
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-full transition group"
            >
              Quero ser parceiro(a)
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}