import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseModelBase } from '../models/responseModelBase';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  private apiPath = "https://localhost:44380/api/Brands/";

  checkBrandExists(brandName:string):Observable<ResponseModelBase>{

    let newPath = this.apiPath +"isbrandexists/?brandName="+brandName;

    return  this.httpClient.get<ResponseModelBase>(newPath);
  }

  add(brand:Brand):Observable<ResponseModelBase>{
     let newPath = this.apiPath + "add";
     return this.httpClient.post<ResponseModelBase>(newPath,brand);
  }


  getByName(name:string):Observable<ResponseModel<Brand>>{
    let newPath = this.apiPath + "getbyname/?name="+name;
    return this.httpClient.get<ResponseModel<Brand>>(newPath);

  }

}
