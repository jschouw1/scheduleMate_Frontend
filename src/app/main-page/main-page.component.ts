import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})





export class MainPageComponent implements OnInit {

  opened: boolean = true;
  
  constructor() { } 

  ngOnInit(): void {
  }

}
