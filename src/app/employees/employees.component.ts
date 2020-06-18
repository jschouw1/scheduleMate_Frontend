import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  result: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
      console.log('The result property is now: ' + this.result);
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeFormComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
