import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-painel',
  templateUrl: './home-painel.component.html',
  styleUrls: ['./home-painel.component.css']
})
export class HomePainelComponent implements OnInit {

  dadosApi: Array<any> = new Array();


  constructor() { }

  ngOnInit(): void {
  }

}
