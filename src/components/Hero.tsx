import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

      {/* Brilho dourado decorativo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-1.5 mb-8 backdrop-blur">
          <SparklesIcon className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-zinc-300">
            Exclusivo para profissionais e revendedoras
          </span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Cosméticos profissionais que{' '}
          <span className="bg-linear-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            valorizam quem faz
          </span>{' '}
          a beleza acontecer
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          A ZENIX Professional é parceira exclusiva de salões e revendedoras
          credenciadas. Qualidade, atendimento e resultado que só quem é
          profissional entende.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={links.parceiro}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-full transition group"
          >
            Quero ser parceiro(a)
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-amber-500 text-white font-semibold px-8 py-3.5 rounded-full transition"
          >
            Ver produtos
          </a>
        </div>
      </div>
    </section>
  );
}
