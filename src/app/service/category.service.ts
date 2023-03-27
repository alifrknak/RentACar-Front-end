import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  apiPath = "https://localhost:44380/api/";

  getBrands(): Observable<ListResponseModel<Brand>> {

    let newPath = this.apiPath + "Brands/getall";

    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getColors(): Observable<ListResponseModel<Color>> {

    let newPath = this.apiPath + "Colors/getall";

    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color):Observable<ResponseModelBase>{
    let newPath = this.apiPath +"Colors/add";
    return this.httpClient.post<ResponseModelBase>(newPath,color);
  }

  addBrand(brand:Brand):Observable<ResponseModelBase>{
    let newPath = this.apiPath + "Brands/add";
    return this.httpClient.post<ResponseModelBase>(newPath,brand);
  }
}
