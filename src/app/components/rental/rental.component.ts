import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/service/rental.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from "@angular/forms"

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {

  carId:number;

       constructor(private rentalService: RentalService,
        private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    ) {
    this.activatedRoute.params.subscribe(params => {
        this.carId = params["id"];
          })
    }

  add(){
    let rental = new Rental()
    rental.carId = this.carId;
    rental.rentDate =new Date(Date.now());
    rental.customerId = 1;

    this.rentalService.add(rental).subscribe(response => {
    this.toastrService.success("Kiralama Başarılı.","Kiralandı.")
    });
    }
}
