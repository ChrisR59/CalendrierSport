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

  constructor(private api: ApiService) {
  }


  ngOnInit() {
    this.api.ObservableEditEvent.subscribe((Event)=>{
      this.id = Event.id;
      this.title = Event.title;
      this.date = Event.start;
      console.log(this.id);
    })
  }

  valider = () => {
    console.log(this.id);
    if(this.id == null){
      if (this.title != null && this.date != null) {
        this.api.postApi('/AddDates', { Title: this.title, start: this.date }).subscribe((res: any) => { })
        alert("L'évenement à bien été ajouté.");
        this.id = null;
        this.title = "";
        this.date = "";
        this.api.ObservableList.next();
      }
    } else {
      if (this.title != null && this.date != null) {
        this.api.put('/EditDate/' + this.id, {Id : this.id, Title: this.title, start: this.date }).subscribe((res: any) => { })
        alert("L'évenement à bien été modifié.");
        this.id = null;
        this.title = "";
        this.date = "";
        this.api.ObservableList.next();
      }
    }
  }
}
