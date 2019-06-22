import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router ){ }

  ngOnInit() {
  }

  showDash(){
    this.router.navigate(['main-dash'], {relativeTo: this.route} )
  }

  showVehicles(){
    this.router.navigate(['vehicles'], {relativeTo: this.route} )
  }

  showTracking(){
    this.router.navigate(['tracking'], {relativeTo: this.route} )
  }

  showReports(){
    this.router.navigate(['reports'], {relativeTo: this.route} )
  }

  showhistory(){
    this.router.navigate(['history'], {relativeTo: this.route} )
  }

  showGeo(){
    this.router.navigate(['geo'], {relativeTo: this.route} )
  }

  showNotification(){
    this.router.navigate(['notification'], {relativeTo: this.route} )
  }

  showSetting(){
    this.router.navigate(['setting'], {relativeTo: this.route} )
  }


}
