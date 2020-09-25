import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  HomeIsValid : boolean = false;
  BackOfficeIsValid : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ValidHome = () => {
    this.HomeIsValid = true;
    this.BackOfficeIsValid = false;
  }

  ValidBackOffice = () => {
    this.HomeIsValid = false;
    this.BackOfficeIsValid = true;
  }
}
