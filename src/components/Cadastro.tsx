import { useRef, useState } from 'react';
import {
  UserIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { montarMensagemCadastro } from '../utils/whatsapp';

type Aba = 'profissional' | 'consumidor';

const PRODUTOS_DISPONIVEIS = [
  'Biotox Royal Blond',
  'ZenitPro Btox Branco',
  'Cauterização CPR',
  'Selagem BioZenit Blond',
  'RoyalPlástia Blond',
  'Longmax',
  'Liso Absoluto',
  'Banana e Mel',
  'Amber Glow Oil',
];

export function Cadastro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [aba, setAba] = useState<Aba>('profissional');

  const [prof, setProf] = useState({
    nome: '',
    salao: '',
    cidade: '',
    endereco: '',
    whatsapp: '',
    email: '',
    observacoes: '',
  });

  const [cons, setCons] = useState({
    cidade: '',
    bairro: '',
    cep: '',
    telefone: '',
  });

  const [produtosSelecionados, setProdutosSelecionados] = useState<string[]>([]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  function toggleProduto(nome: string) {
    setProdutosSelecionados((atual) =>
      atual.includes(nome)
        ? atual.filter((p) => p !== nome)
        : [...atual, nome]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const link =
      aba === 'profissional'
        ? montarMensagemCadastro(
            'Solicitação de Visita — Cabeleireira/Revendedora',
            {
              'Nome completo': prof.nome,
              'Salão/Empresa': prof.salao,
              'Cidade/Estado': prof.cidade,
              Endereço: prof.endereco,
              WhatsApp: prof.whatsapp,
              'E-mail': prof.email,
              Observações: prof.observacoes,
            }
          )
        : montarMensagemCadastro(
            'Pedido — Uso Próprio',
            {
              Cidade: cons.cidade,
              Bairro: cons.bairro,
              CEP: cons.cep,
              Telefone: cons.telefone,
            },
            produtosSelecionados
          );

    window.open(link, '_blank');
  }

  const inputClass =
    'w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zenix-rose focus:bg-zinc-900 transition';

  const labelClass =
    'block text-[0.7rem] font-semibold text-zinc-400 uppercase tracking-widest mb-2';

  return (
    <section
      id="cadastro"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 border-y border-zenix-rose/20 overflow-hidden bg-zenix-rose/30"
    >
      {/* Gradiente rosa escuro fixo no topo */}
      <div className="absolute inset-0 bg-linear-to-b from-zenix-rose-dark/90 via-zenix-rose/40 to-zenix-rose/20 pointer-events-none" />

      {/* Spotlight rosa que segue o mouse */}
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(700px circle at ${pos.x}% ${pos.y}%, rgba(183, 110, 130, 0.6), transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="inline-block text-white text-xs font-semibold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/30">
            Cadastro
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mt-2 mb-4 leading-tight drop-shadow-lg">
            Vamos conversar?
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Escolha o tipo de atendimento e envie seus dados direto pelo WhatsApp.
          </p>
        </div>

        {/* Card do formulário */}
        <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-4xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Abas */}
          <div className="grid grid-cols-2">
            <button
              type="button"
              onClick={() => setAba('profissional')}
              className={`flex items-center justify-center gap-2 py-5 font-semibold text-xs tracking-widest uppercase transition ${
                aba === 'profissional'
                  ? 'bg-zinc-900 text-zenix-rose border-b-2 border-zenix-rose'
                  : 'bg-zinc-950/60 text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent'
              }`}
            >
              <UserIcon className="w-4 h-4" />
              Cabeleireira / Revendedora
            </button>
            <button
              type="button"
              onClick={() => setAba('consumidor')}
              className={`flex items-center justify-center gap-2 py-5 font-semibold text-xs tracking-widest uppercase transition ${
                aba === 'consumidor'
                  ? 'bg-zinc-900 text-zenix-rose border-b-2 border-zenix-rose'
                  : 'bg-zinc-950/60 text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent'
              }`}
            >
              <LockClosedIcon className="w-4 h-4" />
              Uso Próprio
            </button>
          </div>

          {/* Conteúdo */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            {aba === 'profissional' ? (
              <>
                <h3 className="font-display text-2xl text-white mb-2">
                  Solicitar Visita
                </h3>
                <p className="text-zinc-400 text-sm mb-8">
                  Preencha os dados e nossa equipe realizará uma apresentação
                  completa das linhas ZENIX no seu endereço.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Nome completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={prof.nome}
                      onChange={(e) =>
                        setProf({ ...prof, nome: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Nome do Salão / Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome do estabelecimento"
                      value={prof.salao}
                      onChange={(e) =>
                        setProf({ ...prof, salao: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cidade / Estado</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Imperatriz / MA"
                      value={prof.cidade}
                      onChange={(e) =>
                        setProf({ ...prof, cidade: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Nome da rua e número</label>
                    <input
                      type="text"
                      placeholder="Ex: Rua das Flores, 123"
                      value={prof.endereco}
                      onChange={(e) =>
                        setProf({ ...prof, endereco: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={prof.whatsapp}
                      onChange={(e) =>
                        setProf({ ...prof, whatsapp: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={prof.email}
                      onChange={(e) =>
                        setProf({ ...prof, email: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className={labelClass}>Observações</label>
                  <textarea
                    rows={3}
                    placeholder="Como podemos ajudar?"
                    value={prof.observacoes}
                    onChange={(e) =>
                      setProf({ ...prof, observacoes: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </>
            ) : (
              <>
                <h3 className="font-display text-2xl text-white mb-2">
                  Monte seu Pedido — Uso Próprio
                </h3>
                <p className="text-zinc-400 text-sm mb-8">
                  Selecione os produtos desejados e informe seus dados.
                  Enviamos seu pedido para o SAC via WhatsApp.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Cidade</label>
                    <input
                      type="text"
                      required
                      placeholder="Digite sua cidade"
                      value={cons.cidade}
                      onChange={(e) =>
                        setCons({ ...cons, cidade: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Bairro (opcional)</label>
                    <input
                      type="text"
                      placeholder="Seu bairro"
                      value={cons.bairro}
                      onChange={(e) =>
                        setCons({ ...cons, bairro: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>CEP</label>
                    <input
                      type="text"
                      placeholder="00000-000"
                      value={cons.cep}
                      onChange={(e) => setCons({ ...cons, cep: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Telefone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={cons.telefone}
                      onChange={(e) =>
                        setCons({ ...cons, telefone: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className={labelClass}>
                    Produtos desejados (clique para adicionar/remover)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {PRODUTOS_DISPONIVEIS.map((nome) => {
                      const ativo = produtosSelecionados.includes(nome);
                      return (
                        <button
                          key={nome}
                          type="button"
                          onClick={() => toggleProduto(nome)}
                          className={`text-sm px-4 py-3 rounded-2xl border transition text-left ${
                            ativo
                              ? 'bg-zenix-rose text-white border-zenix-rose font-medium shadow-md shadow-zenix-rose/30'
                              : 'bg-zinc-900/80 text-zinc-300 border-zinc-700 hover:border-zenix-rose/50'
                          }`}
                        >
                          {nome}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-zinc-500 mt-3 italic">
                    {produtosSelecionados.length === 0
                      ? 'Nenhum produto selecionado'
                      : `${produtosSelecionados.length} produto(s) selecionado(s)`}
                  </p>
                </div>
              </>
            )}

            {/* Botão de envio */}
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-zenix-rose hover:bg-zenix-rose-dark text-white font-medium tracking-widest uppercase text-sm px-8 py-4 rounded-full transition shadow-lg hover:shadow-xl hover:shadow-zenix-rose/50"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
              {aba === 'profissional'
                ? 'Solicitar Visita via WhatsApp'
                : 'Enviar Pedido via WhatsApp'}
            </button>

            <p className="text-xs text-zinc-500 mt-4">
              Ao clicar, o WhatsApp abrirá com a mensagem já pronta. É só
              confirmar o envio. Nenhum dado é armazenado no site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}