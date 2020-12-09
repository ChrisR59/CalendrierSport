import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  pseudo:string;
  email1:string;
  email2:string;
  password1:string;
  password2:string;

  constructor() { }

  ngOnInit() {
  }

  subscribe = () => {

  }
}
