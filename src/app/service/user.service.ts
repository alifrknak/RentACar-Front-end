import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httlpClient: HttpClient) { }

  private apiPath = "https://localhost:44380/api/Users/";

    user:User;

  getUserByEmail(email:string):Observable<ResponseModel<User>>{
    let newPath = this.apiPath +"getuserbyemail/?email="+email;
    return this.httlpClient.get<ResponseModel<User>>(newPath);
  }
}
