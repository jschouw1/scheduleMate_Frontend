import { Injectable } from '@angular/core';

import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService {
  
  employeeId: number;
  firstName: string;
  insertion: string;
  lastName: string;
  employedAs: string;
  startContract: string;
  endContract: string;
  hoursPerWeek: number;

  constructor(public dialog: MatDialog) { }

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: "500px",
      data: {
        employeeId: this.employeeId,
        firstName: this.firstName,
        insertion: this.insertion,
        lastName: this.lastName,
        employedAs: this.employedAs,
        startContract: this.startContract,
        endContract: this.endContract,
        hoursPerWeek: this.hoursPerWeek
      }
    });

    return dialogRef.afterClosed();
  }
}
