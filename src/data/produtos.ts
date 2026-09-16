export interface Produto {
  id: number;
  nome: string;
  categoria: string; // id da categoria
  descricao: string;
  destaque?: boolean;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Produto 1',
    categoria: 'royalplastia',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 2,
    nome: 'Produto 2',
    categoria: 'royalplastia',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 3,
    nome: 'Produto 3',
    categoria: 'home-care',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
    destaque: true,
  },
  {
    id: 4,
    nome: 'Produto 4',
    categoria: 'home-care',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 5,
    nome: 'Produto 5',
    categoria: 'cpr',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 6,
    nome: 'Produto 6',
    categoria: 'cpr',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 7,
    nome: 'Produto 7',
    categoria: 'linha-4',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 8,
    nome: 'Produto 8',
    categoria: 'linha-4',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
  },
  {
    id: 9,
    nome: 'Produto 9',
    categoria: 'linha-4',
    descricao: 'Descrição breve do produto. Trocaremos depois.',
    destaque: true,
  },
];