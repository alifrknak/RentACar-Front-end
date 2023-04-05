import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private storageService:StorageService,
    private router:Router,
    private userService:UserService) {

      this.createLoginForm();

  }

  createLoginForm() {
    this.loginForm = this.formbuilder.group({
      email:["",Validators.required],
      password:["",Validators .required]
    })
  }

  login(){
    let user = this.loginForm.value as Login;
    this.authService.login(user).subscribe(response=> {
      this.storageService.set(this.storageService.token,response.data.token)
      this.toastrService.success("Giriş Yaptınız.","Başarılı")
      this.router.navigate([""]);
      this.userService.getUserByEmail(user.email).subscribe(res =>{
        this.userService.user = res.data
          this.storageService.set("user",res.data.first_name);
      })

    },Error =>{
      this.toastrService.error("Hatalı giriş","Tekrar dene")
    });
  }
}
