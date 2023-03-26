import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseModelBase } from '../models/responseModelBase';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }

  private apiPath = "https://localhost:44380/api/Colors/";

  checkColorExists(colorName: string):Observable<ResponseModelBase> {
    let newPath = this.apiPath + "iscolorexists/?colorName=" + colorName;
    return this.httpClient.get<ResponseModelBase>(newPath);
  }

  add(color:Color):Observable<ResponseModelBase>{
    let newPath = this.apiPath + "add";
    return this.httpClient.post<ResponseModelBase>(newPath,color);
  }

  getByName(name:string):Observable<ResponseModel<Color>>{
    let newPath = this.apiPath + "getbyname/?name="+name;
    return this.httpClient.get<ResponseModel<Color>>(newPath);
  }
}
