import { Component, NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
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
import { formCanDeactivateGuard } from './guards/form.gurad';

const routes: Routes = [
  { path: "", component: CarComponent },
  { path: "details/:id", component: CarDetailComponent },
  { path: "details/:id/rental", component: RentalComponent },
  {
    path: "caradd", canActivate: [LoginGuard], canDeactivate: [formCanDeactivateGuard], children: [
      { path: "", component: CarAddComponent },
      { path: "coloradd", component: ColorAddComponent },
      { path: "brandadd", component: BrandAddComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "login/register", component: RegisterComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
