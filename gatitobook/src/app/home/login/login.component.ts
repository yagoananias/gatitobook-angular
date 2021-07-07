import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService,
              private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.
      autenticar(this.usuario, this.senha)
      .subscribe((x) => {
        this.router.navigate(['animais'])
      },
      (error) => {
        alert('Erro no engano :O');
        console.log(error);
      }
    );
  }
}
