export interface CadastroPayload {
  nome: string;
  email: string;
  senha: string;
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResposta {
  mensagem: string;
  usuario_id: number;
  nome: string;
}

export interface UsuarioLogado {
  id: number;
  nome: string;
  email: string;
}

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  ativo?: boolean;
  criado_em?: string;
}