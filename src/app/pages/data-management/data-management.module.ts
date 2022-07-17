import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagementRoutingModule } from './data-management-routing.module';
import { DataManagementComponent } from './data-management.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { DManagementComponent } from './d-management/d-management.component';


@NgModule({
  declarations: [DataManagementComponent, BrandManagementComponent, ProductManagementComponent, CreateBrandComponent, 
    CreateProductComponent, DManagementComponent],
  imports: [
    CommonModule,
    DataManagementRoutingModule,
    FormsModule
  ]
})
export class DataManagementModule { }
