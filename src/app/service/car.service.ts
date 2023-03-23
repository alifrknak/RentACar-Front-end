import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httlpClient: HttpClient) { }

  apiPath = "https://localhost:44380/api/";

  getCars(): Observable<ListResponseModel<Car>> {

    let newPath = this.apiPath + "Cars/getall";
    return this.httlpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiPath + "Cars/getbycolor/?colorId="+id;
    return this.httlpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiPath + "Cars/getbybrand/?brandId="+id;
    return this.httlpClient.get<ListResponseModel<Car>>(newPath);
  }

  // let newPath = this.apiUrl + "Products/getbycategory/?categoryId=" + categoryId;
  //   return this.httpClient.get<ListResponseModel<Product>>(newPath);
  // }

}
