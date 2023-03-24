import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ResponseModelBase } from '../models/responseModelBase';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httlpClient: HttpClient) { }

  apiPath = "https://localhost:44380/api/Rental";

  checkRental(carId: number): Observable<ResponseModelBase> {
    let newPath = this.apiPath + "/isrental/?carId=" + carId;
    return this.httlpClient.get<ResponseModelBase>(newPath);
  }

  add(rental: Rental):Observable<ResponseModelBase> {
    let newPath = this.apiPath + "/add";
    return this.httlpClient.post<ResponseModelBase>(newPath, rental);
  }
}
