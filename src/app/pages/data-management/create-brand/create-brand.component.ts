import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandCreate } from 'src/app/data-models/loginDataModel/credentialsModel';
import { DataManagementService } from '../data-management.service';


@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {
  brand: BrandCreate
  priorityList: Array<{ value: number }>;
  categoryList: Array<any>;
  showToaster: boolean;
  toast: { message: any; };


  constructor(
    private dataManagementService: DataManagementService
  ) { }

  ngOnInit(): void {
    this.brand = new BrandCreate();
    this.priorityList = new Array<{ value: number }>();
    for (let i = 1; i <= 10; i++) {
      const val = {
        value: i
      }
      this.priorityList.push(val);
    }
    this.getCategoryList();
  }

  getCategoryList() {
    this.dataManagementService.getCategoryType('category_type').subscribe(response => {
      this.categoryList = response.reference_data;
    })
  }

  createBrand() {
    this.dataManagementService.createBrand(this.brand).subscribe(response => {
      if (response.brand) {
        this.brand = new BrandCreate();
      }
    },
      error => {
        if (error.status === 422) {
          this.toast = {
            message: error.error.message,
          };
          this.showToaster = true;
        } else {
          this.toast = {
            message: error.message,
          };
          this.showToaster = true;
        }
      });
  }

  handleFileInput(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.brand.display_pic = file
    }

  }



}
