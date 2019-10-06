import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  events = [
    { title: 'event 1', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' },
    { title: 'event 2', date: '2019-10-10' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
