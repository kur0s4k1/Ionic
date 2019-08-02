import { Injectable } from '@angular/core';
import { Contato } from '../modelo/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contato: Contato = new Contato();

  listaContatos$: Observable<Contato[]>;

  constructor(private afd: AngularFireDatabase, private router: Router) {
    this.listaContatos$ = this.afd.list<Contato>('contato').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  salvar() {
    this.afd.list('contato').push(this.contato);
    this.contato = new Contato();
    this.router.navigateByUrl('listaContato');
  }

  delete(key: string) {
    this.afd.object(`contato/${key}`).remove();
  }
  // alterar(contato: Contato, key: string) {
  //   this.afd.list('contato').update(key, contato)
  //     .catch((error: any) => {
  //       console.error(error);
  //     });
  // }


}
