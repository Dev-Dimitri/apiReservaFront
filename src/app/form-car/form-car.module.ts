import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { FormCarRoutingModule } from './form-car-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormCarRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,

  ]
})
export class FormCarModule { }
