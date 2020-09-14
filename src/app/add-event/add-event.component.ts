import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  detail: string;
  date: string;
  valid: boolean = false;

  constructor(private api: ApiService) {
  }


  ngOnInit() { }

  valider = () => {
    this.valid = true;

    if (this.detail != null && this.date != null) {
      this.api.postApi('/AddDates', { Title: this.detail, start: this.date }).subscribe((res: any) => { })
      alert("L'évenement à bien été ajouté.");
      this.detail = "";
      this.date = null;
      this.api.ObservableList.next();
    }
  }
}
