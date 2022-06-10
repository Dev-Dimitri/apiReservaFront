import { ListagemComponent } from './shared/listagem/listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePainelComponent } from './home-painel/home-painel.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { FormCarComponent } from './form-car/form-car.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/cadastrar', pathMatch: 'full'},
 {path: 'home', component: HomePainelComponent},
 {path: 'home/cadastrar', component: CadastroCarroComponent},
 {path: 'home/editar/:id', component: FormCarComponent},
 {path: 'home/form', component: FormCarComponent},
 {path: 'home/listagem', component: ListagemComponent}
];
 
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

