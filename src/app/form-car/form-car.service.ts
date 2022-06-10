import { CarModel } from 'src/app/Models/CarModel';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCarService {

  constructor(private http: HttpClient) { }

  GET_DATA_URL = 'http://localhost:8080/Manage';
  POST_DATA_URL = 'http://localhost:8080/Manage'
  UPDATE_DATA_URL = 'http://localhost:8080/Manage'
  DELETE_DATA_URL = 'http://localhost:8080/Manage/'
  GET_DATA_URLID = 'http://localhost:8080/Manage/id/'

  listarCars(): Observable<any> {
    return this.http.get(`${this.GET_DATA_URL}`);
  }

  listarCarsById(idCar: number): Observable<CarModel>{
    return this.http.get(`${this.GET_DATA_URLID}${idCar}`)
  }

  createCars(carModel: CarModel) {
    return this.http.post(`${this.POST_DATA_URL}`, carModel)
  }

  updateCars(carModel: CarModel){
    return this.http.put(`${this.UPDATE_DATA_URL}`, carModel.pkCar)

  }

  deleteById(idCar: CarModel): Observable<CarModel>{
    return this.http.delete(`${this.DELETE_DATA_URL}${idCar.pkCar}` )
  }


}
