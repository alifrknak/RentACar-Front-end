import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent {

  constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }

  colorName: string;

  add() {
    let color = { name: this.colorName } as Color;

    this.categoryService.addColor(color).subscribe(res => {
      this.toastrService.success("Renk Eklendi.","Başarılı");
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

