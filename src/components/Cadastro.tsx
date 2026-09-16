import { useState } from 'react';
import {
  UserIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { montarMensagemCadastro } from '../utils/whatsapp';

type Aba = 'profissional' | 'consumidor';

// Produtos disponíveis pra seleção (Uso Próprio)
// Trocaremos pelos nomes reais depois
const PRODUTOS_DISPONIVEIS = [
  'Cápsula',
  'Kit Banana e Mel',
  'Kit Liso Absoluto',
  'Amber Glow',
  'RoyalPlástia',
  'Home Care',
  'CPR',
  'Linha Profissional',
  'Outro',
];

export function Cadastro() {
  const [aba, setAba] = useState<Aba>('profissional');

  // Campos — Profissional / Revendedora
  const [prof, setProf] = useState({
    nome: '',
    salao: '',
    cidade: '',
    endereco: '',
    whatsapp: '',
    email: '',
    observacoes: '',
  });

  // Campos — Uso Próprio
  const [cons, setCons] = useState({
    cidade: '',
    bairro: '',
    cep: '',
    telefone: '',
  });

  // Produtos selecionados (só pro modo Uso Próprio)
  const [produtosSelecionados, setProdutosSelecionados] = useState<string[]>([]);

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
    'w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/60 transition';

  const labelClass =
    'block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2';

  return (
    <section id="cadastro" className="relative py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Cadastro
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            Vamos conversar?
          </h2>
          <p className="text-zinc-400 text-lg">
            Escolha o tipo de atendimento e envie seus dados direto pelo WhatsApp.
          </p>
        </div>

        {/* Card do formulário */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          {/* Abas */}
          <div className="grid grid-cols-2">
            <button
              type="button"
              onClick={() => setAba('profissional')}
              className={`flex items-center justify-center gap-2 py-5 font-semibold text-sm uppercase tracking-wider transition ${
                aba === 'profissional'
                  ? 'bg-zinc-900 text-amber-400 border-b-2 border-amber-500'
                  : 'bg-zinc-950/60 text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent'
              }`}
            >
              <UserIcon className="w-4 h-4" />
              Cabeleireira / Revendedora
            </button>
            <button
              type="button"
              onClick={() => setAba('consumidor')}
              className={`flex items-center justify-center gap-2 py-5 font-semibold text-sm uppercase tracking-wider transition ${
                aba === 'consumidor'
                  ? 'bg-zinc-900 text-amber-400 border-b-2 border-amber-500'
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
                <h3 className="text-2xl font-semibold text-white mb-2">
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
                <h3 className="text-2xl font-semibold text-white mb-2">
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
                          className={`text-sm px-4 py-2.5 rounded-xl border transition text-left ${
                            ativo
                              ? 'bg-amber-500 text-zinc-950 border-amber-500 font-semibold'
                              : 'bg-zinc-950/60 text-zinc-300 border-zinc-800 hover:border-amber-500/50'
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
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-4 rounded-full transition"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
              {aba === 'profissional'
                ? 'Solicitar Visita via WhatsApp'
                : 'Enviar Pedido via WhatsApp'}
            </button>

            <p className="text-xs text-zinc-500 mt-4">
              Ao clicar, o WhatsApp abrirá com a mensagem já pronta. É só
              confirmar o envio. 🔒 Nenhum dado é armazenado no site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}