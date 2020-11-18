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
  //ex : {title : "test", start:"2020-10-01", end:"2020-10-03"}

  constructor(private api: ApiService) { }

  /**
   * call method for get event
   */
  ngOnInit() {
    this.GetEvents();
    this.events[4].start;//Dont touch
  }

  /**
    * Get element of the list from the bdd
   */
  GetEvents = () => {
    this.api.getApi('/GetAll').subscribe((res: any) => {
      this.events = res;
    })
  }
}
