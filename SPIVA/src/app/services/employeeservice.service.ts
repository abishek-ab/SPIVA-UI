import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(public httpClient:HttpClient) { }

  baseUrl="https://spiva.herokuapp.com/";
  localUrl="http://localhost:8000/";

  getEmployees(){
    return this.httpClient.get(this.baseUrl+"getall");
  }

  updateEmployees(employee){
    console.log(employee);
    return this.httpClient.post<any>(this.baseUrl+"update", employee);
  }

  addNewEmployee(employee){
    console.log(employee);
    return this.httpClient.post<any>(this.baseUrl+"create", employee);
  }

  delete(id){
    return this.httpClient.get(this.baseUrl+"delete?id="+id);
  }
}
