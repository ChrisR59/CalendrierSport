import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message : string;
  IsValid : boolean = false;;

  constructor(private AlertService : AlertService) { }

  ngOnInit() {

    this.AlertService.ObservableAlert.subscribe((res)=> {
      this.IsValid = true;
      this.message = res;
    })
  }

  RemoveAlert = () => {
    this.IsValid = false;
    this.message = "";
  }

}
