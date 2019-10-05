import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  title = 'CalendarSport'; 

}
