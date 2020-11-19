import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  id: number;
  title: string;
  type: string = "";
  StartDate: string;
  EndDate: string;
  btn : string = "Ajouter";
  titleIsValid: boolean;
  dateIsValid: boolean;
  typeIsValid : boolean;
  isValid: boolean = false;
  TypeEvent: [];

  constructor(private api: ApiService, protected AlertService: AlertService) {
  }

  /**
   * Observable edit event
   */
  ngOnInit() {
    this.api.postApi('/TypeEvent',{}).subscribe((res:any) => {
      this.TypeEvent = res;
    })

    this.api.ObservableEditEvent.subscribe((Event) => {
      this.btn = "Modifier";
      this.id = Event.id;
      this.title = Event.title;
      this.type = Event.type;
      this.StartDate = Event.start;
      this.EndDate = Event.end
    })
  }

  /**
   * check if valid event before seed to api
   */
  valider = () => {
    this.isValid = true;
    if (this.CheckFieldIsvalid()) {
      if (this.id == null) {
        this.api.postApi('/AddDates', { Title: this.title, Type : this.type, start: this.StartDate, end: this.EndDate }).subscribe((res: any) => {
          if(!res.error){
            this.AlertService.success("L'évenement '" + res.titleEvent + "' à bien été ajouté.");
          }
        })
      } else {
        this.api.put('/EditDate/' + this.id, { Id: this.id, Title: this.title, Type : this.type, start: this.StartDate, end: this.EndDate }).subscribe((res: any) => {
          if(!res.error){
            this.AlertService.success("L'évenement '" + res.titleEvent + "' à bien été modifié.");
          } 
         })
      }
      
      this.InitFieldForm();
      setTimeout(() => {this.api.ObservableList.next()}, 1000);//Ne pas supprimer bug list ne s'actualise pas la première fois
    }
  }

  /**
   * initialize field form
   */
  InitFieldForm = () => {
    this.id = null;
    this.title = "";
    this.type = "";
    this.StartDate = undefined;
    this.EndDate = undefined;
  }

  /**
   * check if content field is correct
   */
  CheckFieldIsvalid = () => {
    this.titleIsValid = false;
    this.typeIsValid = false;
    this.dateIsValid = false;

    if (this.title != "" && this.title != undefined) {
      this.titleIsValid = true;
    }

    if (this.type != "" && this.type != undefined) {
      this.typeIsValid = true;
    }

    if (this.StartDate != "" && this.StartDate != undefined) {
      this.dateIsValid = true;
    }

    if (this.EndDate == "" || this.EndDate == undefined) {
      this.EndDate = this.StartDate;
    }

    if (this.titleIsValid && this.dateIsValid && this.typeIsValid) {
      return true;
    } else {
      this.AlertService.fail("Merci de remplir tous les champs");
      return false;
    }
  }
}
