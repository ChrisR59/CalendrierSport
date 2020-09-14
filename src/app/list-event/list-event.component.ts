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
    this.GetListEvents();
    
    this.api.ObservableList.subscribe(() => {
      this.GetListEvents();
    });
    
    this.searchService.searchSubject.subscribe(s=> {
      if(s != ""){
        this.api.postApi('/GetSearch/' + s, {search:s}).subscribe((res:any) => {
          this.events = res;
        })
      } else {
        this.GetListEvents();
      }
    })
  }

  GetListEvents = () => {
    this.api.getApi('/GetAll').subscribe((res:any)=> {
      this.events = res;
    })
  }

  delete = (EventId) => {
    this.api.delete('Delete/'  + EventId).subscribe((res:any) => {
      this.api.ObservableList.next();
    })
  }
}
