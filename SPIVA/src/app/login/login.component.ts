import { Component, OnInit, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  bearerToken: string;
  authForm: FormGroup;

  constructor(private _bottomSheetRef: MatBottomSheetRef<LoginComponent>, private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.authForm = new FormGroup({
      'id': new FormControl(0),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  openLink(): void {
    this._bottomSheetRef.dismiss();
  }

  // onLogin() {
  //   this._bottomSheetRef.dismiss();
  //   this.authenticationService.isValidUser({
  //     "id": "0",
  //     "username": "abishek",
  //     "password": "abishek"
  //   }).subscribe(
  //     (data) => {
  //       this.bearerToken = data['token'];
  //       this.authenticationService.setBearerToken(this.bearerToken);
  //       this.authenticationService.loggedInSuccessfully();
  //     }
  //     )
  //   // this.router.navigateByUrl("/home");
  // }

  onSubmit() {
    console.log(this.authForm.value);
    this._bottomSheetRef.dismiss();
    this.authenticationService.isValidUser(this.authForm.value).subscribe(
      (data) => {
        this.bearerToken = data['token'];
        this.authenticationService.setBearerToken(this.bearerToken);
        this.authenticationService.loggedInSuccessfully();
      }
    )
  }



}
