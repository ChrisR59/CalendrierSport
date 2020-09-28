import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertService } from '../alert/alert.service';

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

  constructor(private api: ApiService, protected AlertService : AlertService) {
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
          this.AlertService.success("L'évenement à bien été ajouté.");
          this.api.ObservableList.next();
      } else {
          this.api.put('/EditDate/' + this.id, {Id : this.id, Title: this.title, start: this.date }).subscribe((res: any) => { })
          this.AlertService.success("L'évenement à bien été modifié.");
          this.api.ObservableList.next();
      }
      this.InitFieldForm();   
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
    } else {
      this.AlertService.fail("Merci de remplir tous les champs");
      return false;
    }
  }
}
