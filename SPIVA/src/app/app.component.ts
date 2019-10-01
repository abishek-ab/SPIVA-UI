import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPIVA';
  getUrl()
  {
    return "url('https://ak4.picdn.net/shutterstock/videos/3189244/thumb/1.jpg')";
  }
  
}
