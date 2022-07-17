import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/features/common-layout/common-layout.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DManagementComponent } from './d-management/d-management.component';

import { DataManagementComponent } from './data-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';

const routes: Routes = [{
  path: '', data: { restrict: ['dataManagement'] }, component: CommonLayoutComponent,
  children: [
    {
      path: '', component: DataManagementComponent,
      children: [
        { path: '', component: DManagementComponent },
        {path: 'brandManagement', component: BrandManagementComponent},
        {path: 'createBrand', component: CreateBrandComponent },
        {path: 'createProduct', component: CreateProductComponent},
       {path: 'productManagement', component: ProductManagementComponent}
      ]
    }
  ]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagementRoutingModule { }
