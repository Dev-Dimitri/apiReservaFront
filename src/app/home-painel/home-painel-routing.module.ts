import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePainelComponent } from './home-painel.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePainelRoutingModule { }
