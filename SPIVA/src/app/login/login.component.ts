import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private _bottomSheetRef: MatBottomSheetRef<LoginComponent>,private router:Router) {}
  
    openLink(): void {
      this._bottomSheetRef.dismiss();
    }

    onLogin(){
      this._bottomSheetRef.dismiss();
      this.router.navigateByUrl("/home");
    }

    

  ngOnInit() {
  }

}
