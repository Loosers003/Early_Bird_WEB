import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit {
  selectedManagement: string;
  isData: boolean;

  constructor(
    private router: Router,
    private route:ActivatedRoute 
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.selectedManagement  = '';
    if(this.router.url.split('/').length === 3) {
      this.isData = true;
    } else {
      this.isData = false;
      this.setManagement(this.router.url.split('/')[3]);
    }
  }

  setManagement(route: string) {
    this.selectedManagement =  route === 'brandManagement' ? 'Brand Management' : 'Product Management';
  }

  setRoute(route) {
    console.log(this.router.navigate([route], { relativeTo: this.route }))
    this.isData = false;
    route === 'brandManagement' ? this.router.navigate([route], { relativeTo: this.route }) : this.router.navigate([route], { relativeTo: this.route });
    this.setManagement(route);
  }

}
