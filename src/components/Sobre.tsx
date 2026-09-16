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
    <section id="sobre" className="relative bg-zenix-cream">
      {/* Cabeçalho da seção */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-24 pb-16">
        <span className="text-zenix-rose-dark text-xs font-medium tracking-[0.3em] uppercase">
          Sobre a ZENIX
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-zenix-ink mt-4 mb-6 leading-tight">
          Elevando o padrão do mercado profissional
        </h2>
        <p className="text-zenix-warm-gray text-base md:text-lg leading-relaxed">
          A <span className="text-zenix-rose-dark font-medium">ZENIX Professional</span>{' '}
          surgiu em 2025 com um propósito claro: elevar o padrão de qualidade
          dos cosméticos capilares profissionais. Em escolhemos o caminho da
          parceria — nosso único canal de vendas são os próprios profissionais.
        </p>
      </div>

      {/* Foto full-width com overlay e missão */}
      <div className="relative w-full h-100 md:h-130 overflow-hidden">
        <img
          src="/cabelo2.jpg"
          alt="Cabelo profissional ZENIX"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay escuro em degradê */}
        <div className="absolute inset-0 bg-linear-to-t from-zenix-ink/85 via-zenix-ink/50 to-zenix-ink/20" />

        {/* Texto da missão por cima */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <span className="inline-block text-white/80 text-xs font-medium tracking-[0.3em] uppercase mb-5 drop-shadow-md">
              Nossa Missão
            </span>
            <p className="font-display text-2xl md:text-4xl text-white italic leading-tight drop-shadow-lg">
              "Nos destacar no mercado de cosméticos pela parceria, qualidade e
              excelência no atendimento."
            </p>
          </div>
        </div>
      </div>

      {/* Pilares */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map((pilar) => {
            const Icone = pilar.icone;
            return (
              <div
                key={pilar.titulo}
                className="group bg-white border border-zenix-rose/15 rounded-3xl p-8 hover:border-zenix-rose/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-zenix-blush flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-zenix-rose">
                  <Icone className="w-6 h-6 text-zenix-rose-dark transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-display text-xl text-zenix-ink mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-zenix-warm-gray leading-relaxed">
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