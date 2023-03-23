import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/service/car.service';
import { CategoryComponent } from '../category/category.component';
import { Input } from '@angular/core'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  cars: Car[];
  carsByColorId: number;
  carsByBrandId: number;

  constructor
    (private carService: CarService,
      private activatedRoute: ActivatedRoute,
    ) {
    this.activatedRoute.params.subscribe(params => {

      if (params["color"] != -1 && params["color"] != null)
        this.carsByColorId = params["color"];
      if (params["brand"] != -1 && params["brand"] != null)
        this.carsByBrandId = params["brand"];

      this.getCars();
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe(response => {
    })
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe(response => {
    })
  }
}
