import { Component } from '@angular/core';
import { Logomarca } from "../../components/logomarca/logomarca";
import { Btn } from '../../components/btn/btn';
import { BtnInfo } from '../../models/btn.model';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [Logomarca, Btn, FormsModule, LucideAngularModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  senha = '';
  mensagem = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, senha: this.senha }).subscribe(resultado => {
      if (resultado.success) {
        this.router.navigate(['/']);
      } else {
        this.mensagem = resultado.message || 'Erro no login!';
      }
    })
  }

  btnInfo: BtnInfo[] = [
    {
      tipo: 'button',
      valor: 'Cadastrar-se',
      link: '/cadastro'
    }
  ]
}
