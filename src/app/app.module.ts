import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import { CadastroCarroModule } from './cadastro-carro/cadastro-carro.module';
import { HomePainelComponent } from './home-painel/home-painel.component';
import { HomePainelModule } from './home-painel/home-painel.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCarroComponent,
    HomePainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroCarroModule,
    HomePainelModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
