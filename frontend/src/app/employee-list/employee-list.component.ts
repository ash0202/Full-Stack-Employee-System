import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee>=[]
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit(): void {
      this.service.getAllEmployee().subscribe(data=>{
        this.employees=data
      })
  }
  updateEmployee(id:number)
  {
    this.router.navigate(['update',id])
  }
deleteEmployee(id:number)
{
  this.service.deleteEmployee(id).subscribe(data=>{
    this.service.getAllEmployee().subscribe(data=>{
      this.employees=data
    })
  })
}
employeeDetails(id:number)
{
  this.router.navigate(['employee-details',id])
}
}
