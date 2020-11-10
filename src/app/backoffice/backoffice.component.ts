import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  search:string;

  constructor(private searchService:SearchServiceService) { }

  ngOnInit() {
  }
  
  change = (type : string) => {
    if(type != null || type != undefined)
      this.search = type;
      
    this.searchService.searchSubject.next(this.search);
  }
}
