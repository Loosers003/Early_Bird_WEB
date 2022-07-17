import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-boy-management',
  templateUrl: './delivery-boy-management.component.html',
  styleUrls: ['./delivery-boy-management.component.scss']
})
export class DeliveryBoyManagementComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/brandManagement'])
  }

}
