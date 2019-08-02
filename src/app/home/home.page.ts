import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email,
      this.usuario.senha).then((res) => {
        this.router.navigate(['pagina']);
      }).catch((erro) => console.log(erro));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}

