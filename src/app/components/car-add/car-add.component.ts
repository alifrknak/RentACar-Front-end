import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms"
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/service/brand.service';
import { CarService } from 'src/app/service/car.service';
import {Brand} from 'src/app/models/brand'
import { ColorService } from 'src/app/service/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  carAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService
    )
    {
        this.createCarAddFrom();
     }

  createCarAddFrom() {

    this.carAddForm =  this.formBuilder.group({
      modelYear: ["", Validators.required],
      colorId: ["", Validators.required],
      brandId: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid)
      {
        let car = this.carAddForm.value as Car;

        this.setBrand();
        this.setColor();

        this.carService.add(car).subscribe(response => {
            console.log(response);
        });
      }
  }

  setColor(){

    let car = this.carAddForm.value;

    this.colorService.checkColorExists(car.colorId).subscribe(response => {
        if(!response.success)
        {
            let color = {
            name:car.colorId
          } as Color;
          this.colorService.add(color).subscribe(q=>{});
        }
        this.colorService.getByName(this.carAddForm.value.colorId).subscribe(q=>{
          this.carAddForm.value.colorId = q.data.id
      })
    })


  }

  setBrand(){
    let car = this.carAddForm.value;

    this.brandService.checkBrandExists(car.brandId).subscribe(response => {
      if(!response.success)
      {
        let brand = {
          name :car.brandId
        } as Brand;
        this.brandService.add(brand).subscribe(q =>{})
      }

      this.brandService.getByName(this.carAddForm.value.brandId).subscribe(q=> {
        this.carAddForm.value.brandId = q.data.id
      })

    })

  }

}
