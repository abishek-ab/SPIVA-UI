import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  constructor(private _bottomSheet: MatBottomSheet, private authService: AuthenticationService, private router: Router) { }

  loginStatus;
  openBottomSheet(): void {
    this._bottomSheet.open(LoginComponent);
  }

  ngOnInit() {
    this.authService.isLoggedin().subscribe(
      (data) => {
        console.log('loginnnnnnnnnnnnnnnnnnnnnn' + data);
        this.loginStatus = data;
      }
    );
    this.selected="Home";
  }

  onLogOut() {
    this.authService.logout();
  }

  public navItems = [
    // { name: "account_circle", text: "Avatar" },
    // { name: "error", text: "Badge" },
    { name: "home", text: "Home", nav: '' },
    // { name: "group_work", text: "Button Group" },
    { name: "poll", text: "Manage Employees", nav: 'home' },

    { name: "view_carousel", text: "Carousel" },
    { name: "date_range", text: "Date picker" },
    { name: "all_out", text: "Dialog" },
    { name: "web", text: "Forms" },
    { name: "android", text: "Icon" },
    { name: "list", text: "List" },
    { name: "arrow_back", text: "Navbar" },
    { name: "menu", text: "Navdrawer" },

    { name: "linear_scale", text: "Slider" },
    { name: "swap_vert", text: "Scroll" },
    // { name: "feedback", text: "Snackbar" },
    // { name: "tab", text: "Tabbar" },
    // { name: "android", text: "Toast" }
  ];
  public selected = "Avatar";

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer: IgxNavigationDrawerComponent;

  public drawerState = {
    miniTemplate: true,
    open: false,
    pin: true
  };

  /** Select item and close drawer if not pinned */
  public navigate(item) {
    this.selected = item.text;
   
    // if (!this.drawer.pin) {
    //   this.drawer.close();
    // }
    if (item.nav != null) {
      this.router.navigate([item.nav]);
    }
  }



}
