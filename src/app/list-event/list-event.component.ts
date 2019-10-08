import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events = [];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getApi('events').subscribe((res:any)=> {
      this.events = res;
    })
  }

}
