import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  constructor(private http: HttpClient) { }

  addEmployee(data) {
    console.log(data);
    console.log('prepost');
    this.http.post<Object>('http://localhost:8080/registerEmployee', data).subscribe(
      () => console.log('finished' + data)
    );    
  }

}
