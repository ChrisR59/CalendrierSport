import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ApiService } from '../api.service';

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
  pseudoIsValid:Boolean;
  email1IsValid:Boolean;
  email2IsValid:Boolean;
  password1IsValid:Boolean;
  password2IsValid:Boolean;

  constructor(private AlertService : AlertService, private api:ApiService) { }

  ngOnInit() {
  }

  subscribe = () => {
    if(this.CheckFieldIsvalid()){
      if(this.CheckPassword && this.CheckEmail){
        this.api.postApi('/AddMembers', { Pseudo: this.pseudo, Email : this.email1, Password: this.password1}).subscribe((res: any) => {
          if(!res.error){
            this.AlertService.success("Inscription réussit.");
          }
        })
      }
    }
  }

  /**
   * check if content field is correct
   */
  CheckFieldIsvalid = () => {
    this.pseudoIsValid = false;
    this.email1IsValid = false;
    this.email2IsValid = false;
    this.password1IsValid = false;
    this.password2IsValid = false;

    if (this.pseudo != "" && this.pseudo != undefined) {
      this.pseudoIsValid = true;
    }

    if (this.email1 != "" && this.email1 != undefined) {
      this.email1IsValid = true;
    }

    if (this.email2 != "" && this.email2 != undefined) {
      this.email2IsValid = true;
    }

    if (this.password1 != "" && this.password1 != undefined) {
      this.password1IsValid = true;
    }

    if (this.password2 != "" || this.password2 == undefined) {
      this.password2IsValid = true;
    }

    if (this.pseudoIsValid && this.email1IsValid && this.email2IsValid && this.password1IsValid && this.password2IsValid) {
      return true;
    } else {
      this.AlertService.fail("Merci de remplir tous les champs");
      return false;
    }
  }

  CheckEmail = () => {
    if(this.email1 == this.email2)
      return true;
  }

  CheckPassword = () => {
    if(this.password1 == this.password2)
      return true;
  }
}
