import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  constructor(private authService: AuthService) { }

  transform(value: string): string {
    if (this.authService.isAuthenticated())
      return "Çıkış Yap";
    return "Giriş Yap";
  }

}
