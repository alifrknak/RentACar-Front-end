import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"color/:color/brand/:brand/price/:price", component:CarComponent},
  {path:"details/:id",component:CarDetailComponent},
  {path:"details/:id/rental",component:RentalComponent},
  {path:"caradd",component:CarAddComponent},
  {path:"caradd/coloradd",component:ColorAddComponent},
  {path:"caradd/brandadd",component:BrandAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
