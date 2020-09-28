import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  ObservableAlertSuccess : Subject<any> = new Subject<any>();
  ObservableAlertFail : Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }
  
  success = (message : string) => {
    this.ObservableAlertSuccess.next(message);
  }

  fail = (message : string) => {
    this.ObservableAlertFail.next(message);
  }
}
