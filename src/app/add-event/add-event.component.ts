import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  id : number;
  title: string;
  date: string;
  titleIsValid : boolean;
  dateIsValid : boolean;
  isValid : boolean = false;

  constructor(private api: ApiService) {
  }


  ngOnInit() {
    this.api.ObservableEditEvent.subscribe((Event)=>{
      this.id = Event.id;
      this.title = Event.title;
      this.date = Event.start;
    })
  }

  valider = () => {
    this.isValid = true;
    if(this.CheckFieldIsvalid()){
      if(this.id == null){
          this.api.postApi('/AddDates', { Title: this.title, start: this.date }).subscribe((res: any) => { })
          alert("L'évenement à bien été ajouté.");
      } else {
          this.api.put('/EditDate/' + this.id, {Id : this.id, Title: this.title, start: this.date }).subscribe((res: any) => { })
          alert("L'évenement à bien été modifié.");
      }
      this.InitFieldForm();   
      this.api.ObservableList.next();
    }    
  }

  InitFieldForm = () => {
    this.id = null;
    this.title = "";
    this.date = undefined;
  }

  CheckFieldIsvalid = () => {
    this.titleIsValid = false;
    this.dateIsValid = false;
    
    if(this.title != "" && this.title != undefined){
      this.titleIsValid = true;
    }

    if(this.date != "" && this.date != undefined) {
      this.dateIsValid = true;
    }

    if(this.titleIsValid && this.dateIsValid){
      return true;
    } else{
      return false;
    }
  }
}
