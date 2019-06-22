import { NotificationComponent } from './notification/notification.component';
import { GeoComponent } from './geo/geo.component';
import { HistoryComponent } from './history/history.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SettingComponent } from './setting/setting.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'dashboard/:id', component: DashboardComponent,
    children: [
      { path: 'main-dash', component: MainDashComponent},
      { path: 'vehicles', component: VehiclesComponent},
      { path: 'tracking', component: TrackingComponent},
      { path: 'reports', component: ReportsComponent},
      { path: 'history', component: HistoryComponent},
      { path: 'geo', component: GeoComponent},
      { path: 'notification', component: NotificationComponent},
      { path: 'setting', component: SettingComponent},
    ]
  },
  { path: 'navbar', component: NavbarComponent},
  { path: 'main-dash', component: MainDashComponent},
  { path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
