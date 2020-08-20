import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events = [];

  constructor(private api:ApiService, private searchService:SearchServiceService) { }

  ngOnInit() {
    this.api.getApi('GetAll').subscribe((res:any)=> {
      this.events = res;
    })

    this.searchService.searchSubject.subscribe(s=> {
      this.api.postApi('events', {search:s}).subscribe((res:any) => {
        this.events = res;
      })
    })
  }

  delete = (e) => {
    var id = 0;
    this.api.postApi('Delete', e).subscribe((res:any) => {
      this.events = res;
    })
  }
}
