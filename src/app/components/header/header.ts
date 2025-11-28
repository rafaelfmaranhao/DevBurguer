import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Logomarca } from '../logomarca/logomarca';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logomarca, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  nomeUsuario = '';
  menuAberto = false;
  logado = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');

    if (!this.auth.isLogged()) {
      this.nomeUsuario = 'Login';
      this.logado = false;
    } else {
      this.nomeUsuario = usuario.nomeUsuario;
      this.logado = true;
    }
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.menuAberto = false;
    }
  }
  
  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
