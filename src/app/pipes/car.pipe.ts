import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: Car[], filterByColor: number, filterByBrand: number, filterByPrice: string): Car[] {

    if (filterByColor != -1)
      value = value.filter(filter => filter.colorId == filterByColor)
    if (filterByBrand != -1)
      value = value.filter(filter => filter.brandId == filterByBrand)
    if (filterByPrice != "Fiyat aralığı seç")
      value = this.priceFilter(value, filterByPrice)

    return value;

  }

  priceFilter(cars: Car[], price: string): Car[] {

    switch (price) {
      case "$3000 ve altı":
        cars = cars.filter(q => q.dailyPrice <= 3000)
        break;

      case "$3000 - $4000":
        cars = cars.filter(q => q.dailyPrice <= 4000 && q.dailyPrice >= 3000)
        break;

      case "$4000 - $5000":
        cars = cars.filter(q => q.dailyPrice >= 4000 && q.dailyPrice <= 5000)
        break;

      case "$5000 ve üzeri":
        cars = cars.filter(q => q.dailyPrice >= 5000)
        break;

    }

    return cars;
  }

}
