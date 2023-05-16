import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { ResponseModel } from '../models/responseModel';
import { TokenModule } from '../models/tokenModule';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private storageService: StorageService) { }

  private apiPath = "https://localhost:44380/api/Auth/";


  login(login: Login): Observable<ResponseModel<TokenModule>> {
    let newPath = this.apiPath + "login";
    return this.httpClient.post<ResponseModel<TokenModule>>(newPath, login);
  }

  isAuthenticated() {
    if (this.storageService.get(this.storageService.token))
      return true;
    return false;
  }

  register(register: Register): Observable<ResponseModel<TokenModule>> {
    let newPath = this.apiPath + "register";
    return this.httpClient.post<ResponseModel<TokenModule>>(newPath, register);
  }

  logOut(){
this.storageService.removeItem(this.storageService.token);
  }

  state():string{
    if(this.isAuthenticated())
  return "ÇIKIŞ YAP"
    else
    return "GİRİŞ YAP"}

}
