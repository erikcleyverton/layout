import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome_pessoa: string = '';
  email_pessoa: string = '';
  numero_cpf: string = '';
  data_nascimento: string = '';
  numero_cep: string = '';
  municipio: string = '';     
  sigla_uf: string = '';
  sigla_municipio: string = '';

  addItem(): void {
    console.log('Cliente cadastrado:', {
      nome: this.nome_pessoa,
      email: this.email_pessoa,
      cpf: this.numero_cpf,
      dataNascimento: this.data_nascimento,
      cep: this.numero_cep,
      municipio: this.municipio,
      uf: this.sigla_uf
    });
  }

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

