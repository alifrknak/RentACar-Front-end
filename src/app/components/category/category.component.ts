import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CategoryService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  brands: Brand[];
  colors: Color[];
  filterButton = false;

  selectedColorId: number = -1;
  selectedBrandId: number = -1;
  selectedPrice: string = "-1";


  constructor(private categoryService: CategoryService, private router: Router) {
    this.getBrands();
    this.getColors();

  }

  getBrands() {
    this.categoryService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors() {
    this.categoryService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }

  colorSelect(color: string) {
    if (color != "Renk seç") {
      let s = this.colors.filter(q => q.name == color);
      this.selectedColorId = s[0].id;
    } else {
      this.selectedColorId = -1;
    }

  }

  brandSelect(brand: string) {
    if (brand != "Marka seç") {
      let s = this.brands.filter(q => q.name == brand);
      this.selectedBrandId = s[0].id;
    } else {
      this.selectedBrandId = -1;
    }
  }

  priceSelect(price: string) {
    if (price != "Fiyat aralığı seç")
      this.selectedPrice = price;
    else
      this.selectedPrice = "-1";
  }

  filterbtn() {
    if (this.selectedBrandId != -1 || this.selectedColorId != -1 || this.selectedPrice != "-1")
      this.filterButton = true;
    else
      this.filterButton = false;
  }

  removeFilter() {
    this.selectedColorId = -1;
    this.selectedBrandId = -1;
    this.selectedPrice = "-1";
    this.router.navigateByUrl("");
    this.filterButton = false;
  }
}
