import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa-service';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
 nome = ''
 email = ''
 cpf = ''
 dataNascimento = ''


constructor(private pessoaService: PessoaService){}

save(){
 this.pessoaService.adicionar{{
 id: 1, 
 nome: this.nome, 
 email: this.email
 dataNascimento: this.dataNascimento

}}

}
