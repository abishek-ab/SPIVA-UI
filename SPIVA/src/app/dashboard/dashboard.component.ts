import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public card:any={
    buttons: ["read more"],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that’s among the world’s major commercial,
              financial and cultural centers.`,
    icons: ["favorite", "share"],
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
    subtitle: "City in New York",
    title: "New York City"
};
  constructor() {
      // this.iconService.addSvgIcon("rain", "https://www.infragistics.com/angular-demos/assets/images/card/icons/rain.svg", "weather-icons");
      // this.iconService.addSvgIcon("breeze", "https://www.infragistics.com/angular-demos/assets/images/card/icons/breeze.svg", "weather-icons");
  }

  public ngOnInit() {
  }

}
