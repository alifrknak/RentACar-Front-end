import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/service/car.service';
import { CategoryComponent } from '../category/category.component';
import { Input } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  cars: Car[];
  brands: Brand[];
  colors: Color[];

  filterByColor = -1;
  filterByBrand = -1;
  filterByPrice = "Fiyat aralığı seç";

  constructor(private carService: CarService,
     private activatedRoute: ActivatedRoute,
     private categoryService:CategoryService) {

    this.getCars();
   this.getBrands();
   this.getColors();

  }


  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getBrands(){
    this.categoryService.getBrands().subscribe(response=> {
      this.brands =  response.data
    })
  }
  getColors(){
    this.categoryService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  changeColor(color:string){
   if (color != "Renk seç") {
      let s = this.colors.filter(q => q.name == color);
      this.filterByColor = s[0].id;
    } else
      this.filterByColor = -1;
  }

  changeBrand(brand:string){
    if (brand != "Marka seç") {
      let s = this.brands.filter(q => q.name == brand);
      this.filterByBrand = s[0].id;
    } else
      this.filterByBrand = -1;
  }

  changePrice(price:string){
    if (price != "Fiyat aralığı seç")
    this.filterByPrice = price;
  else
    this.filterByPrice = "-1";
  }
}
