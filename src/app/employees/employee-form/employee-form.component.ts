import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [MatDialogModule]
})
export class EmployeeFormComponent implements OnInit {

  employeeId: number;
  firstName: string;
  insertion: string;
  lastName: string;
  employedAs: string;
  startContract: string;
  endContract: string;
  hoursPerWeek: number;

  constructor(public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log('In employee-form.component.ts' + this.data)
     }

  onNoClick(): void{
    this.dialogRef.close();
  }
  
  
  
  
  
  ngOnInit(): void {
  }

}
