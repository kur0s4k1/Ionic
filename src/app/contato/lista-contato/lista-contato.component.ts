import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/modelo/contato';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.scss'],
})
export class ListaContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit() { }

  excluir(key: string) {
    this.contatoService.delete(key);
  }
  editar(contato: Contato, key: string) {
    // this.contatoService.alterar(contato, key);
  }

}
