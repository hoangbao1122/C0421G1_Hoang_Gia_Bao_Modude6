import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../model/car";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private urlCar = environment.apiBaseUrl

  constructor(private httpClient: HttpClient) {
  }


  getAllCar(): Observable<Car | any> {
    return this.httpClient.get(`${this.urlCar}car/list`);
  }



  saveCar(car: Car): Observable<Car | any> {
    return this.httpClient.post(this.urlCar + "car/add", car);
  }

  update(car: Car): Observable<Car | any> {
    return this.httpClient.put(`${this.urlCar}car/update`, car);
  }

  getCar(id: number): Observable<Car | any> {
    return this.httpClient.get(`${this.urlCar}car/find/${id}`)
  }

  delete(id: number): Observable<Car | any> {
    return this.httpClient.delete(`${this.urlCar}car/delete/${id}`);
  }

}
