export interface Produto {
  id?: number;
  nome: string;
  descricao?: string;
  preco: number; // em centavos (ex: R$ 19,90 → 1990)
  estoque?: number;
  criado_em?: string;
}