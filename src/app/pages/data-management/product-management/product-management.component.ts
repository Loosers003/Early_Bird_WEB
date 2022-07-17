import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  productList: any;

  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
      productName: 'Buff Milk Pvt Ltd',
      subBrandname: 'Dairy',
      variantType: 'Kgs,gms',
      price: 100,
      discount: '20%',
      offerType: 'Best Selling Inclusive',
      status: 'yes',
    },
    {
      productName: 'Buff Milk Pvt Ltd',
      subBrandname: 'Dairy',
      variantType: 'Kgs,gms',
      price: 100,
      discount: '20%',
      offerType: 'Best Selling Inclusive',
      status: 'yes',
    },
  ]
  }

}
