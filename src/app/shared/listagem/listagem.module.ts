import { RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule, ToastrModule, RouterModule
  ], exports: [ListagemComponent]
})
export class ListagemModule { }
