import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Promise } from 'q';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn=new Subject<boolean>();
authUrl="http://localhost:8000/";
baseUrl="https://spiva.herokuapp.com/";

  constructor(private httpService:HttpClient,private router:Router) { }

  isValidUser(data){
   return this.httpService.post(this.authUrl+'login',data);
  }

  isLoggedin(){
    this.isUserAuthenticated(this.getBearerToken()).subscribe((data)=>{
     this.loggedIn.next(data['isAuthenticated']);
    })
    return this.loggedIn.asObservable();
  }

  setBearerToken(token){
    sessionStorage.setItem('token', token);
  }

  getBearerToken(){
    return sessionStorage.getItem('token');
  }

  isUserAuthenticated(token){
    return this.httpService.get(this.authUrl+'isAuthenticated',{
      headers: new HttpHeaders().set('Authentication',`Bearer ${token}`)
    });
  }

  loggedInSuccessfully(){
    this.loggedIn.next(true);
  }

  logout(){
    sessionStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

}
