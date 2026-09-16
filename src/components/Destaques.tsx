import {
  TruckIcon,
  HandRaisedIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const itens = [
  {
    icone: TruckIcon,
    titulo: 'Pronta Entrega',
    descricao: 'Produtos disponíveis para envio imediato',
  },
  {
    icone: HandRaisedIcon,
    titulo: 'Parceria Exclusiva',
    descricao: 'Vendemos apenas para profissionais credenciados',
  },
  {
    icone: BuildingStorefrontIcon,
    titulo: 'Atendimento Presencial',
    descricao: 'Suporte direto e personalizado pra você',
  },
  {
    icone: CalendarDaysIcon,
    titulo: 'Visita sem Compromisso',
    descricao: 'Agende uma visita e conheça os produtos',
  },
];

export function Destaques() {
  return (
    <section className="relative border-y border-zinc-800 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {itens.map((item) => {
            const Icone = item.icone;
            return (
              <div key={item.titulo} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                  <Icone className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.titulo}</h3>
                <p className="text-sm text-zinc-400 max-w-50">
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
