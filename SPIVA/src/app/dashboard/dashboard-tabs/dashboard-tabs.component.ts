import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styleUrls: ['./dashboard-tabs.component.scss']
})
export class DashboardTabsComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }
 
}
