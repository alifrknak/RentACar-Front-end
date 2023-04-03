import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Pipe({
  name: 'navbar'
})
export class NavbarPipe implements PipeTransform {

  constructor(private authService: AuthService) { }

  transform(value: string): string {

    return this.authService.isAuthenticated() ?  "Çıkış Yap" : "Giriş Yap";
  }
}
