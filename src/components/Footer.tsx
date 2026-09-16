import { links } from '../utils/whatsapp';

const navegacao = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Cadastro', href: '#cadastro' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo + descrição */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block text-xl font-bold mb-4">
              <span className="bg-linear-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                ZENIX
              </span>{' '}
              <span className="text-white font-light">PROFESSIONAL</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Cosméticos capilares profissionais exclusivos para salões e
              revendedoras credenciadas. Parceria que transforma.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-amber-400 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {anoAtual} ZENIX Professional. Todos os direitos reservados.
          </p>
          <a
            href={links.parceiro}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-amber-400 transition"
          >
            Feito com 💛 em Imperatriz / MA
          </a>
        </div>
      </div>
    </footer>
  );
}