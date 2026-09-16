import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden bg-zenix-cream"
    >
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-zenix-blush rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-zenix-rose/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Coluna esquerda — texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-zenix-rose-dark mb-5">
              Cosméticos Profissionais
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-zenix-ink mb-6">
              Resultados que{' '}
              <span className="text-zenix-rose italic">transformam</span> a
              beleza real
            </h1>

            <p className="text-base text-zenix-warm-gray leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Exclusivo para profissionais e revendedoras credenciadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-2 bg-zenix-rose hover:bg-zenix-rose-dark text-white font-medium tracking-widest uppercase text-sm px-7 py-3.5 rounded-full transition shadow-lg hover:shadow-xl"
              >
                Conheça nossas linhas
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href={links.parceiro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-zenix-ink/20 hover:border-zenix-rose text-zenix-ink hover:text-zenix-rose-dark font-medium tracking-widest uppercase text-sm px-7 py-3.5 rounded-full transition"
              >
                Falar com a gente
              </a>
            </div>
          </div>

          {/* Coluna direita — imagem com logo */}
          <div className="relative">
            {/* Círculo decorativo atrás */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] aspect-square rounded-full bg-linear-to-br from-zenix-blush to-zenix-rose/20 blur-2xl" />
            </div>

            {/* Imagem principal — mais horizontal e com zoom no cabelo */}
            <div className="relative aspect-16/10 rounded-4xl overflow-hidden border border-zenix-rose/20 shadow-xl">
              <img
                src="/cabelo1.jpg"
                alt="Modelo com cabelo ruivo brilhante"
                className="w-full h-full object-cover object-[70%_center] scale-110"
              />

              {/* Logo sobreposta — canto superior esquerdo */}
              <div className="absolute top-5 left-5">
                <img
                  src="/logo-zenix.png"
                  alt="ZENIX Professional"
                  className="h-10 md:h-12 w-auto drop-shadow-md"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}