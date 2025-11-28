import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  cadastrar(usuario: { nomeUsuario: string, senha: string }) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExist = usuarios.find((u: any) => u.usuario === usuario.nomeUsuario);

    if (usuarioExist) return { success: false, message: 'Usuário já existe!' };

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return { success: true, message: 'Cadastro realizado com sucesso!'}
  }

  login(usuario: { nomeUsuario: string, senha: string}) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioValido = usuarios.find(
      (u: any) => u.nomeUsuario === usuario.nomeUsuario && u.senha === usuario.senha
    );

    if (usuarioValido) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
      return { success: true }
    }
    return { success: false, message: 'Usuário ou senha inválidos!' };
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
  }

  isLogged() {
    return !!localStorage.getItem('usuarioLogado');
  }
}
