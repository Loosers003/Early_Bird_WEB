import { Component, OnInit } from '@angular/core';
import { DataManagementService } from '../data-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-management',
  templateUrl: './brand-management.component.html',
  styleUrls: ['./brand-management.component.scss']
})
export class BrandManagementComponent implements OnInit {
  brandList: any;

  constructor(
    private dataManagementService: DataManagementService,
    private router: Router,
    private route:ActivatedRoute 
  ) { }

  ngOnInit(): void {
   
  this.getBrandsData();
  }

  getBrandsData() {
    this.dataManagementService.getBrandsList().subscribe((response)=>{
      console.log(response);
      this.brandList = response.brands;
    })

  }
  setRoute(route) {
    console.log(route);
    console.log(this.router.navigate([route], { relativeTo: this.route }));
  }
  

}
