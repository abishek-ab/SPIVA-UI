import { Component, OnInit, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private _bottomSheetRef: MatBottomSheetRef<LoginComponent>,private router:Router,private authService:AuthServiceService) {}
  
    openLink(): void {
      this._bottomSheetRef.dismiss();
    }

    onLogin(){
      this._bottomSheetRef.dismiss();
      this.authService.login();
      this.router.navigateByUrl("/home");
    }

    

  ngOnInit() {
  }

}
