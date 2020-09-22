import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  ObservableAlert : Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }
  
  success = (message : string) => {//on recois le message ici
    //this.alert(new Alert());
    this.ObservableAlert.next(message);
  }
}
