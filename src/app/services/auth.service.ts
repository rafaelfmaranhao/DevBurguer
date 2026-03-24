import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of, map } from 'rxjs';

import {
  CadastroPayload,
  LoginPayload,
  LoginResposta,
  UsuarioLogado
} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar(usuario: CadastroPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario).pipe(
      map(() => ({ success: true, message: 'Cadastro realizado com sucesso!' })),
      catchError(err => {
        const message = err.error?.detail === 'E-mail já cadastrado'
          ? 'E-mail já cadastrado!'
          : 'Erro ao realizar cadastro.';
        return of({ success: false, message });
      })
    );
  }

  login(credenciais: LoginPayload): Observable<{ success: boolean; message?: string }> {
    return this.http.post<LoginResposta>(`${this.baseUrl}/auth/login/`, credenciais).pipe(
      tap(resposta => {
        const usuarioLogado: UsuarioLogado = {
          id: resposta.usuario_id,
          nome: resposta.nome,
          email: credenciais.email
        };
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
      }),
      map(() => ({ success: true })),
      catchError(err => {
        const message = err.status === 401
          ? 'E-mail ou senha inválidos!'
          : 'Erro ao realizar login.';
        return of({ success: false, message });
      })
    );
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('usuarioLogado');
  }

  getUsuarioLogado(): UsuarioLogado | null {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
  }
}