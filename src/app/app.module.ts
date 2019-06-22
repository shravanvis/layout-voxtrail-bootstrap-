
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { SettingComponent } from './setting/setting.component';
import { NotificationComponent } from './notification/notification.component';
import { GeoComponent } from './geo/geo.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';
import { TrackingComponent } from './tracking/tracking.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { AgmCoreModule } from '@agm/core';

import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    MainDashComponent,
    SettingComponent,
    NotificationComponent,
    GeoComponent,
    HistoryComponent,
    ReportsComponent,
    TrackingComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6oOTzzMuHvqBuZx0Oy6PdCq9v3byyWII'})
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
