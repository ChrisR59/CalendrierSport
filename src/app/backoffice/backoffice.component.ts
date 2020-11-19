import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  search:string;
  TypeEvent: [];

  constructor(private searchService:SearchServiceService, private api:ApiService) { }

  ngOnInit() {
    this.api.postApi('/TypeEvent',{}).subscribe((res:any) => {
      this.TypeEvent = res;
    })
  }
  
  /**
   * Observable for search one event
   * @param type string for search one event
   */
  change = (type : string) => {
    if(type != null || type != undefined)
      this.search = type;
      
    this.searchService.searchSubject.next(this.search);
  }
}
