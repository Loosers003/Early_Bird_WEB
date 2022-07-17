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
    var formData: any = new FormData();
    formData.append('brand[name]', brand.name);
    formData.append('brand[priority]', brand.priority);
    formData.append('brand[active]', true);
    formData.append('brand[category_type]', brand.category_type);
    formData.append('brand[description]', brand.comment);
    formData.append('brand[display_pic]', brand.display_pic);
    formData.append('brand[discount]', brand.discount);
    console.log(formData)
    return this.httpClient.post(`${environment.APP_API_BASE}${APIEndPoints.dataManagement.getAllBrands}`, formData).pipe(map(response => {
      return response;
    }))
  }
}
