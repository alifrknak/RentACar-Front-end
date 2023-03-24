import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/service/car.service';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  carDetails: CarDetails;
  rentalState:string;
  rentalBool:boolean;
  carId:number;

  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private rentalService:RentalService) {

    this.activatedRoute.params.subscribe(params => {
      this.getCarDetails(params["id"]);
      this.checkRentalState(params["id"]);
      this.carId = params["id"];
    })
  }

  getCarDetails(id: number) {
    this.carService.getCarDetails(id).subscribe(response => {
    this.carDetails = response.data
    });
  }

  checkRentalState(carId:number){
    this.rentalService.checkRental(carId).subscribe(response =>{
      if(response.success) {
        this.rentalState = "Kiralanabilir."
        this.rentalBool =true;
      }
      else{
        this.rentalState = "Kiralanamaz."
        this.rentalBool = false;
      }

    })
  }
}

