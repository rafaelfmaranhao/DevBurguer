// src/app/services/api.service.ts
// Cole este arquivo no seu projeto Angular e injete onde precisar

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  ativo?: boolean;
  criado_em?: string;
}

export interface Produto {
  id?: number;
  nome: string;
  descricao?: string;
  preco: number; // em centavos
  estoque?: number;
  criado_em?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // ── Usuários ──────────────────────────────────────────

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${id}`);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/usuarios`, usuario);
  }

  atualizarUsuario(id: number, dados: Partial<Usuario>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/usuarios/${id}`, dados);
  }

  deletarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/usuarios/${id}`);
  }

  // ── Produtos ──────────────────────────────────────────

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`);
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/produtos/${id}`);
  }

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseUrl}/produtos`, produto);
  }

  atualizarProduto(id: number, dados: Partial<Produto>): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/produtos/${id}`, dados);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/produtos/${id}`);
  }
}
