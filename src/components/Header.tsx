import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { links } from '../utils/whatsapp';

const navegacao = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className="bg-linear-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            ZENIX
          </span>{' '}
          <span className="text-white font-light">PROFESSIONAL</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 hover:text-amber-400 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA WhatsApp */}
        <a
          href={links.parceiro}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-5 py-2 rounded-full transition"
        >
          Falar no WhatsApp
        </a>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {menuAberto ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="text-zinc-300 hover:text-amber-400 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.parceiro}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-5 py-2 rounded-full text-center transition"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}