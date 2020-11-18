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

  /**
   * Visual effect on buttons
   */
  ValidHome = () => {
    this.HomeIsValid = true;
    this.BackOfficeIsValid = false;
  }

  /**
   * Visual effect on buttons
   */
  ValidBackOffice = () => {
    this.HomeIsValid = false;
    this.BackOfficeIsValid = true;
  }
}
