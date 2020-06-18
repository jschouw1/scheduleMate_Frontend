import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeFormService } from './employee-form.service';

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

  constructor(private formService: EmployeeFormService) {}

  openDialog() {
    this.formService.openDialog().subscribe(data => {
      console.log(data);
    });
  }


  ngOnInit(): void {

  }
}