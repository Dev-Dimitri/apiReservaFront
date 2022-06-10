import { CarModel } from './../Models/CarModel';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCarService {

  constructor(private http: HttpClient) { }

  GET_DATA_URL = 'http://localhost:8080/Manage/List';
  POST_DATA_URL = 'http://localhost:8080/Manage/Register'

  listarCars(): Observable<any> {
    return this.http.get(`${this.GET_DATA_URL}`);
  }

  createCars(carModel: CarModel) {
    return this.http.post(`${this.POST_DATA_URL}`, carModel)
  }


}
