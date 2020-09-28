import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  message: string;
  IsValidSuccess: boolean = false;
  IsValidFail: boolean = false;

  constructor(private AlertService: AlertService) { }

  ngOnInit() {
    this.AlertService.ObservableAlertSuccess.subscribe((res) => {
      this.message = res;
      this.IsValidFail = false;
      this.IsValidSuccess = true;
    })

    this.AlertService.ObservableAlertFail.subscribe((res) => {
      this.message = res;
      this.IsValidSuccess = false;
      this.IsValidFail = true;
    })
  }

  RemoveAlert = () => {
    this.IsValidSuccess = false;
    this.IsValidFail = false;
    this.message = "";
  }

}
