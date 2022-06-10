import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCarService {

  constructor(private http: HttpClient) { }

  GET_DATA_URL = 'http://localhost:8080/Manage/List';

  listarAlunos(): Observable<any> {
    return this.http.get(`${this.GET_DATA_URL}`);
  }
}
