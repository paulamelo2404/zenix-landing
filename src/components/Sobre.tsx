import { CheckBadgeIcon, HeartIcon, TrophyIcon } from '@heroicons/react/24/outline';

const pilares = [
  {
    icone: HeartIcon,
    titulo: 'Parceria Real',
    descricao:
      'Nosso único canal de vendas são os profissionais. Crescemos juntos com quem usa e revende nossos produtos.',
  },
  {
    icone: CheckBadgeIcon,
    titulo: 'Qualidade Premium',
    descricao:
      'Produtos desenvolvidos para alta performance em salões, com resultado profissional de verdade.',
  },
  {
    icone: TrophyIcon,
    titulo: 'Atendimento de Excelência',
    descricao:
      'Suporte próximo, ágil e personalizado. Aqui você fala com gente que entende do assunto.',
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Sobre a ZENIX
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Elevando o padrão do mercado profissional
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A <span className="text-amber-400 font-semibold">ZENIX Professional</span> surgiu
            em 2025 com um propósito claro: elevar o padrão de qualidade dos
            cosméticos capilares profissionais. Em meio a um mercado saturado,
            escolhemos o caminho da parceria — nosso único canal de vendas são
            os próprios profissionais.
          </p>
        </div>

        {/* Missão destacada */}
        <div className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl bg-linear-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20">
          <p className="text-center text-lg md:text-xl text-zinc-200 italic leading-relaxed">
            "Nossa missão é nos destacar no mercado de cosméticos pela parceria,
            qualidade de produtos e excelência no atendimento — nos tornando
            referência no segmento."
          </p>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar) => {
            const Icone = pilar.icone;
            return (
              <div
                key={pilar.titulo}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-amber-500/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
                  <Icone className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {pilar.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
