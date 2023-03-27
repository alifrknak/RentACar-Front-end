import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent {

  BrandName:string;

  constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }


  add() {
    let brand = { name: this.BrandName } as Brand;

    this.categoryService.addBrand(brand).subscribe(res => {
      this.toastrService.success("Marka Eklendi.","Başarılı");
    }, responsError => {
      if(responsError.error.Errors.length > 0)
      {
        for (const i of responsError.error.Errors) {
          this.toastrService.error(i.ErrorMessage,"Doğrulama hatası");
        }
      }
    });
  }
}
