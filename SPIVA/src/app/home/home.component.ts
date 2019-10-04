import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxDialogComponent } from 'igniteui-angular';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("gridRowEdit", { read: IgxGridComponent,static:true }) public gridRowEdit: IgxGridComponent;
  @ViewChild("dialogAdd",{static:true}) public dialog:IgxDialogComponent;

  employee:Employee[]=[];
  newEmployee:Employee;
  temp:Employee[];

  constructor(public employeeService:EmployeeserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loadAllEmployees();
    this.newEmployee=new Employee(0,'','');
  }

  loadAllEmployees(){
    this.employee=[];
    this.employeeService.getEmployees().subscribe(
      (data:Employee[])=>{
        console.log(data);
        this.employee=data;
      }
    );
  }

  onSave(){
    //console.log(this.gridRowEdit.data[0]);
    this.temp=this.gridRowEdit.data;
   
     this.employeeService.updateEmployees(this.temp).subscribe(
       (data)=>console.log(data)
    );
  }

  cancel(){
    this.dialog.close();
    this.newEmployee=new Employee(0,'','');
  }

  addRow(message){
    console.log(location.origin);
    this.employeeService.addNewEmployee(new Employee(0,this.newEmployee.firstName,this.newEmployee.department)).subscribe(
      (data:Employee[])=>{
        this.loadAllEmployees();
      }
    );
    this.dialog.close();
    this.newEmployee=new Employee(0,'','');
    this.snackBar.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

  public removeRow(rowIndex) {
    const row = this.gridRowEdit.getRowByIndex(rowIndex);
    console.log(row.rowData.id);
    this.employeeService.delete(row.rowData.id).subscribe(
      (data)=>console.log(data)
    );
    row.delete();
 }
 openSnackBar(message) {
   this.onSave();
  this.snackBar.open(message, '', {
    duration: 2000,
    verticalPosition: 'top',
  });
}

}

class Employee{
  constructor(id:number, firstName:string, department:string){
    this.id=id;
    this.firstName=firstName;
    this.department=department;
  }
  id:number;
  firstName:string;
  department:string;
}
