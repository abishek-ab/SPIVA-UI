import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './angular.material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxDividerModule, IgxRippleModule, IgxChipsModule,
   IgxSliderModule, IgxListModule, IgxExpansionPanelModule,IgxInputGroupModule } from "igniteui-angular";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxDividerModule,
    IgxRippleModule,
    IgxChipsModule,
    IgxSliderModule,
    IgxListModule,
    IgxExpansionPanelModule,
    MDBBootstrapModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents :[LoginComponent]
})
export class AppModule {
}
