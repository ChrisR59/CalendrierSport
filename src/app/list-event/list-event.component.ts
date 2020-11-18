import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ApiService } from '../api.service';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events = [];

  constructor(private api:ApiService, private searchService:SearchServiceService, private AlertService : AlertService) { }

  /**
   * Initialize a list event
   * Observable on the list 
   * observable on the field search for find a element of the list
   */
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

  /**
   * Maj of the list
   */
  GetListEvents = () => {
    this.api.getApi('/GetAll').subscribe((res:any)=> {
      this.events = res;
    })
  }

  /**
   * Update one event
   * @param Event one event
   */
  edit = (Event) => {
    this.api.ObservableEditEvent.next(Event);
  }

  /**
   * Remove one Event
   * @param EventId Id of event
   */
  delete = (EventId) => {
    this.api.delete('Delete/' + EventId).subscribe((res:any) => {
      if(!res.error){
        this.AlertService.success("L'event '" + res.title + "' a été supprimé avec succès");
        this.api.ObservableList.next();
      }
    })
  }
}
