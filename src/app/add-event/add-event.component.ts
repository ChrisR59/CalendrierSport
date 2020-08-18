import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  detail:string;
  date:Date;
  valid:boolean = false;

  constructor(private api:ApiService) { }
  

  ngOnInit() {
  }

  valider = () => {
    this.valid = true;
    if(this.detail != null && this.date != null)
      this.api.postApi('addEvent', {title:this.detail, date: this.date}).subscribe((res:any) => { })
      alert("event ajouter");
      this.detail = "";
      this.date = null;
  }
}
