import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIEndPoints } from 'src/app/features/common/apiEndPoints';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBrandsList(): Observable<any> { 
    return this.httpClient.get(`${environment.APP_API_BASE}${APIEndPoints.dataManagement.getAllBrands}`).pipe(map(response => {
     return response;
    }))
  }

  getCategoryType(category): Observable<any> {
    return this.httpClient.get(`${environment.APP_API_BASE}${APIEndPoints.dataManagement.getCategoryType}?data_type=${category}`).pipe(map(response => {
      return response;
     }))
    
  }

  createBrand(brand): Observable<any> {
    console.log(brand.display_pic);
  var formData: any = new FormData();
  formData.append('name', brand.display_pic.name);
  formData.append('brand', brand.display_pic.type);
    return this.httpClient.post(`${environment.APP_API_BASE}${APIEndPoints.dataManagement.getAllBrands}`,formData, brand).pipe(map(response =>{
      return response;
    }))
  }
}
