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
   IgxSliderModule, IgxListModule, IgxExpansionPanelModule,IgxInputGroupModule,IgxGridModule,IgxExcelExporterService, IgxCsvExporterService, IgxDialogModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRadioModule, IgxSwitchModule, IgxToggleModule  } from "igniteui-angular";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import { DashboardTabsComponent } from './dashboard/dashboard-tabs/dashboard-tabs.component'
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    DashboardTabsComponent
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
    IgxInputGroupModule,
    FormsModule,
    IgxGridModule,
    IgxDialogModule,
    HttpClientModule,
    ButtonsModule, 
    WavesModule, 
    CardsModule,
    ReactiveFormsModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxSwitchModule,
    IgxToggleModule
  ],
  providers: [IgxExcelExporterService, IgxCsvExporterService,AuthGuardService,AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents :[LoginComponent]
})
export class AppModule {
}
