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
    return "url('http://www.sclance.com/pngs/white-clouds-png/white_clouds_png_1506971.jpg')";
  }
  
}
