import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  imports: [FormsModule], 
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  nome_pessoa: string = '';
  email_pessoa: string = '';
  numero_cpf: string = '';
  data_nascimento: string = '';
  numero_cep: string = '';
  municipio: string = '';     
  sigla_uf: string = '';
  sigla_municipio: string = '';

  LimparItem(): void {
    this.nome_pessoa = '';
    this.email_pessoa = '';
    this.numero_cpf = '';
    this.data_nascimento = '';
    this.numero_cep = '';
    this.municipio = '';
    this.sigla_uf = '';
  }
}