import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private loggedIn=new BehaviorSubject<boolean>(false);
  constructor() { }

 public isAuthenticated(){
  return this.loggedIn.asObservable();
}

  login(){
    this.loggedIn.next(true);
  }

  logout(){
    this.loggedIn.next(false);
  }


}
