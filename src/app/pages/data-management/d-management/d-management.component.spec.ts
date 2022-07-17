import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DManagementComponent } from './d-management.component';

describe('DManagementComponent', () => {
  let component: DManagementComponent;
  let fixture: ComponentFixture<DManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
