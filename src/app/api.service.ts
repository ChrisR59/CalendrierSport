import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  urlBase = "http://localhost:52277";
  ObservableList : Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }

  getApi = (link) => {
    return this.http.get(this.urlBase + link);
  }

  postApi = (link, data) => {
    return this.http.post(this.urlBase + link, data);
  }

  delete = (url) => {
    return this.http.delete(this.urlBase+"/"+url);
  }
}
