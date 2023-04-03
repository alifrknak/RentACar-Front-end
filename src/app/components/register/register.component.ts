import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup;
  verifyPassword:string;

  constructor(private formbuilder: FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private storageService:StorageService,
    ) {

this.createRegistorForm();


  }

  createRegistorForm(){
    this.registerForm = this.formbuilder.group({
      first_name:["",Validators.required],
      last_name :["",Validators.required],
      email:["",Validators.required],
      password :["",Validators.required],
    })
  }

  register(){

    if(this.registerForm.valid && this.verifyPassword == this.registerForm.value.password)
    {
      let user = this.registerForm.value as Register;
      this.authService.register(user).subscribe(response => {
        if(response.success)
        {
          this.toastrService.success("Kayıt Başarılı");

        }


      })
    }
    else
      this.toastrService.error("Bilgileri Doğru girdiğinizden emin olun.","Hata");


  }
}
