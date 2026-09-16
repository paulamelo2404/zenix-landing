import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { links } from '../utils/whatsapp';

const navegacao = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Linhas', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Cadastro', href: '#cadastro' },
];

const contatos = [
  { label: 'WhatsApp', valor: '+55 63 9206-8388', href: links.parceiro },
  {
    label: 'E-mail',
    valor: 'zenixbelezaprofissional@gmail.com',
    href: 'mailto:zenixbelezaprofissional@gmail.com',
  },
  {
    label: 'Instagram',
    valor: '@zenix.professional',
    href: 'https://www.instagram.com/zenix.professional',
  },
  {
    label: 'Localização',
    valor: 'Imperatriz / MA',
    href: 'https://maps.google.com/?q=Imperatriz+MA',
  },
];

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden">
      {/* Blob decorativo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zenix-rose/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Topo do footer */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Logo + descrição */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center mb-6 group">
              <img
                src="/logo-zenix.png"
                alt="ZENIX Professional"
                className="h-16 w-auto brightness-0 invert transition group-hover:opacity-80"
              />
            </a>
            <p className="text-zinc-400 leading-relaxed max-w-md mb-8">
              Cosméticos capilares profissionais exclusivos para salões e
              revendedoras credenciadas. Parceria que transforma.
            </p>

            {/* CTA */}
            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zenix-rose hover:bg-zenix-rose-dark text-white font-medium tracking-widest uppercase text-xs px-6 py-3 rounded-full transition shadow-lg hover:shadow-xl hover:shadow-zenix-rose/30"
            >
              Falar com a gente
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-6">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-300 hover:text-zenix-rose transition text-sm w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="lg:col-span-4">
            <h4 className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-6">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              {contatos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col"
                  >
                    <span className="text-[0.65rem] text-zinc-500 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-zinc-200 text-sm group-hover:text-zenix-rose transition break-all">
                      {item.valor}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 text-center md:text-left">
            © {anoAtual} ZENIX Professional. Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-500 text-center md:text-right flex items-center gap-1.5 justify-center md:justify-end">
            Feito com
            <HeartSolidIcon className="w-3.5 h-3.5 text-zenix-rose animate-gentle-pulse" />
            em Imperatriz / MA
          </p>
        </div>
      </div>
    </footer>
  );
}