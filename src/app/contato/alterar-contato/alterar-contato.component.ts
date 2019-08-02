import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/modelo/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-alterar-contato',
  templateUrl: './alterar-contato.component.html',
  styleUrls: ['./alterar-contato.component.scss'],
})
export class AlterarContatoComponent implements OnInit {

  contato: Contato;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    
  }

}
