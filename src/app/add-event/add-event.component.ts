import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  detail:string;
  date:Date;
  valid:boolean = false;

  constructor(private api:ApiService) {
    this.date = new Date();
   }
  

  ngOnInit() {
  }

  valider = () => {
    this.valid = true;
    //this.date = moment(this.date , "DD/MM/YYYY HH:mm:ss").toDate();
    if(this.detail != null && this.date != null)
      this.api.postApi('AddDates', {title:this.detail, date: this.date.toISOString()}).subscribe((res:any) => { })
      alert("event ajouter" + this.date);
      this.detail = "";
      this.date = null;
  }
}
