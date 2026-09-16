import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destaques } from './components/Destaques';
import { Sobre } from './components/Sobre';
import { Categorias } from './components/Categorias';
import { Produtos } from './components/Produtos';
import { Diferenciais } from './components/Diferenciais';
import { Depoimentos } from './components/Depoimentos';
import { Cadastro } from './components/Cadastro';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <Destaques />
        <Sobre />
        <Categorias />
        <Produtos />
        <Diferenciais />
        <Depoimentos />
        <Cadastro />
      </main>
    </div>
  );
}