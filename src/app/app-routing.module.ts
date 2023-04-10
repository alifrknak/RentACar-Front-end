import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "",  component: CarComponent },//redirectTo:""
  { path: "details/:id", component: CarDetailComponent },
  { path: "details/:id/rental", component: RentalComponent },
  { path: "caradd", component: CarAddComponent, canActivate: [LoginGuard] },
  { path: "caradd/coloradd", component: ColorAddComponent },
  { path: "caradd/brandadd", component: BrandAddComponent },
  { path: "login", component: LoginComponent },
  { path: "login/register", component: RegisterComponent },
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
