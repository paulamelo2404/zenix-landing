import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Destaques } from './components/Destaques';
import { Sobre } from './components/Sobre';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <main>
        <Hero />
        <Destaques />
        <Sobre />
      </main>
    </div>
  );
}