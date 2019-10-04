import { Component, OnInit, Input } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet,private authService:AuthServiceService) { }

  loginStatus;
  openBottomSheet(): void {
    this._bottomSheet.open(LoginComponent);
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(
      (data)=>{
        console.log('loginnnnnnnnnnnnnnnnnnnnnn'+data);
        this.loginStatus=data;
      }
    );
  }

  onLogOut(){
    this.authService.logout();
  }

}
