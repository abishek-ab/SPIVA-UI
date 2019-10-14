import { Component, OnInit, OnDestroy, ViewChild, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SPIVA';

  loggedIn: boolean;

  // @Input() toggleFromHeader=new EventEmitter();

  constructor(private router: Router, private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.authService.isLoggedin().subscribe(
      (data: boolean) => {
        this.loggedIn = data;
      }
    )

  }

  ngOnDestroy() {

  }

  getUrl() {
    return "url('https://ak4.picdn.net/shutterstock/videos/3189244/thumb/1.jpg')";
  }
}
