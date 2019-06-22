import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  latitide = 51.678418;
  longitude = 7.809007;
  // locationChosen: false;

  onChoseLocation(event){
    console.log(event)
    // this.latitide = event.coords.lat;
    // this.longitude = event.coords.lan;
    // this.locationChosen = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
