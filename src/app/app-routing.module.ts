import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ListaContatoComponent } from './contato/lista-contato/lista-contato.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contato', component:ContatoComponent},
  { path: 'listaContato', component:ListaContatoComponent},
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
