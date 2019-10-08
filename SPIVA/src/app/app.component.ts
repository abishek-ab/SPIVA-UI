import { Component,OnInit, ChangeDetectorRef, OnDestroy,ViewChild,Input,EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'SPIVA';
  mobileQuery: MediaQueryList;
  @ViewChild('snav',{static:false}) navBar;
 // @Input() toggleFromHeader=new EventEmitter();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(){
   
   
  }
    private _mobileQueryListener: () => void;
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }

  getUrl()
  {
    return "url('https://ak4.picdn.net/shutterstock/videos/3189244/thumb/1.jpg')";
  }

  toggleMenu(id){
    this.navBar.toggle();
    if(id===2){
      this.router.navigateByUrl("/home");
    }
  }

  toggleFromHeader(event){
  if(event){
    this.toggleMenu(0);
  }
}
  
}
