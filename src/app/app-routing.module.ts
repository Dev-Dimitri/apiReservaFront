import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePainelComponent } from './home-painel/home-painel.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';

const routes: Routes = [{path: '', component: HomePainelComponent},
 {path: 'home', component: HomePainelComponent},
 {path: 'home/cadastrar', component: CadastroCarroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
