import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms"
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/service/car.service';
import { Brand } from 'src/app/models/brand'
import { Color } from 'src/app/models/color';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  carAddForm: FormGroup;
  colors: Color[];
  brands: Brand[];

  selectedColorId: number;
  selectedBrandId: number;

  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) {
    categoryService.getBrands().subscribe(res => {
      this.brands = res.data;
    })
    categoryService.getColors().subscribe(res => {
      this.colors = res.data;
    })

    this.createCarAddFrom();
  }

  createCarAddFrom() {

    this.carAddForm = this.formBuilder.group({
      modelYear: ["", Validators.required],
      colorId: [0, Validators.required],
      brandId: [0, Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  add() {
    if (this.carAddForm.valid) {

      let car = this.carAddForm.value as Car;
      car.brandId = this.selectedBrandId;
      car.colorId = this.selectedColorId;

      this.carService.add(car).subscribe(response => {
        this.toastrService.success("Araba eklendi.", "Başarılı")
      }, responsError => {
        if(responsError.error.Errors.length > 0)
        {
          for (const i of responsError.error.Errors) {
            this.toastrService.error(i.ErrorMessage,"Doğrulama hatası");
          }
        }

      });

    } else {
      this.toastrService.error("Form Eksik", "!!");
    }
  }


  colorSelect(color: string) {
    if (color != "Renk seç") {
      let s = this.colors.filter(q => q.name == color);
      this.selectedColorId = s[0].id;
    } else {
      this.selectedColorId = -1;
    }

  }

  brandSelect(brand: string) {
    if (brand != "Marka seç") {
      let s = this.brands.filter(q => q.name == brand);
      this.selectedBrandId = s[0].id;
    } else {
      this.selectedBrandId = -1;
    }
  }


}
