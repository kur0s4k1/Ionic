import { Component, OnInit } from '@angular/core';
import { Contato } from '../modelo/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent implements OnInit {



  constructor(private contatoService: ContatoService) { }

  ngOnInit() { }



}
