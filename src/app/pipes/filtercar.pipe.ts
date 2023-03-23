import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filtercar'
})
export class FiltercarPipe implements PipeTransform {

  transform(value: Car[],colorId:number,brandId:number): Car[] {

   if(colorId!=-1 && brandId !=-1)
    value.filter(q=> q.brandId ==brandId && q.colorId== colorId);
    return value;
  }
}
