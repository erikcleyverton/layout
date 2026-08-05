import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {

  private pessoas: Pessoa[] = [];

  adicionar(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }

  listar(): Pessoa[] {
    return this.pessoas;
  }
}