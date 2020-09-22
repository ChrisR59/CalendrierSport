import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FullCalendarModule } from '@fullcalendar/angular';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { AlertComponent } from './alert/alert.component';
import { AlertModule } from './alert/alert.module';

const route: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'backOffice', component: BackofficeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    BackofficeComponent,
    AddEventComponent,
    ListEventComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
