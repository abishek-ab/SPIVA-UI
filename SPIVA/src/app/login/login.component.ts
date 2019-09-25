import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<LoginComponent>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
     // event.preventDefault();
    }

    

  ngOnInit() {
  }

}
