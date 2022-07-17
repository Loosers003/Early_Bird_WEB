import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-d-management',
  templateUrl: './d-management.component.html',
  styleUrls: ['./d-management.component.scss']
})
export class DManagementComponent implements OnInit {

  selectedManagement: string;
  isData: boolean;

  constructor(
    private router: Router,
    private route:ActivatedRoute 
  ) { }

  ngOnInit(): void {
  }

  setManagement(route: string) {
    this.selectedManagement =  route === 'brandManagement' ? 'Brand Management' : 'Product Management';
  }

  setRoute(route) {
    this.isData = false;
    route === 'brandManagement' ? this.router.navigate([route], { relativeTo: this.route }) : this.router.navigate([route], { relativeTo: this.route });
    this.setManagement(route);
  }


}
