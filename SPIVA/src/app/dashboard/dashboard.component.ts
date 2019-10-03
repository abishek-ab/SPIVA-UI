import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  constructor() {
      // this.iconService.addSvgIcon("rain", "https://www.infragistics.com/angular-demos/assets/images/card/icons/rain.svg", "weather-icons");
      // this.iconService.addSvgIcon("breeze", "https://www.infragistics.com/angular-demos/assets/images/card/icons/breeze.svg", "weather-icons");
  }

  public ngOnInit() {
  }

}
