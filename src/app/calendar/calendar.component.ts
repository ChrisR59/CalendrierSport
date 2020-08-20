import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  events = [];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getApi('GetAll').subscribe((res:any)=> {
      this.events = res;
    })
  }

}
