import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key :string):string{
    return localStorage.getItem(key);
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear();
  }
}
