import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeFormService } from './employee-form.service';
import { EmployeeRegistrationService } from './employee-registration.service';

export interface DialogData {

  employeeId: number;
  firstName: string;
  insertion: string;
  lastName: string;
  employedAs: string;
  startContract: string;
  endContract: string;
  hoursPerWeek: number;

}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeId: number;
  firstName: string;
  insertion: string;
  lastName: string;
  employedAs: string;
  startContract: string;
  endContract: string;
  hoursPerWeek: number;

  constructor(public formService: EmployeeFormService, public registrationService: EmployeeRegistrationService) {}

  openDialog() {
    this.formService.openDialog().subscribe(data => {
      console.log(data);
        
      this.registrationService.addEmployee(data);
    });
  }


  ngOnInit(): void {

  }
}