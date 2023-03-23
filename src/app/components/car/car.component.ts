import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/service/car.service';
import { CategoryComponent } from '../category/category.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  cars: Car[];
  filterByColor = -1;
  filterByBrand = -1;
  filterByPrice = "Fiyat aralığı seç";

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['color'] != -1 && params['color'] != null)
        this.filterByColor = params['color'];
      if (params['brand'] != -1 && params['brand'] != null)
        this.filterByBrand = params['brand'];
      if (params['price'] != "-1" && params['price'] != null)
      this.filterByPrice = params["price"];
        this.getCars();
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;

      if (this.filterByColor != -1) {
        this.cars = this.cars.filter((q) => q.colorId == this.filterByColor);
        this.filterByColor = -1;
      }
      if (this.filterByBrand != -1) {
        this.cars = this.cars.filter((q) => q.brandId == this.filterByBrand);
        this.filterByBrand = -1;
      }
      if (this.filterByPrice != "Fiyat aralığı seç") {
        this.priceFilter(this.filterByPrice)
        this.filterByPrice = "Fiyat aralığı seç";
      }
    });
  }

  getCarsByColor(id: number) {
    this.carService.getCarsByColor(id).subscribe((response) => { });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => { });
  }


  //baska sınıfa al
  priceFilter(price: string) {

    switch (price) {
      case "$2000 ve altı":
        this.cars = this.cars.filter(q => q.dailyPrice <= 2000 )
        break;

      case "$3000 - $4000":
        this.cars = this.cars.filter(q => q.dailyPrice <= 4000 && q.dailyPrice >= 3000)
        break;

        case "$4000 - $5000":
          this.cars = this.cars.filter(q => q.dailyPrice >= 4000 && q.dailyPrice <= 5000)
          break;

          case "$5000 ve üzeri":
            this.cars = this.cars.filter(q => q.dailyPrice >=5000)
            break;

    }
  }
}
