import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {


  emp:Employee=new Employee();
 // userForm:FormGroup
  constructor(private service:EmployeeService,private router:Router) {   
   

  }

  ngOnInit(): void {
 
  }

  addEmployee()
  {
      this.service.addEmployee(this.emp).subscribe(data=>{
        console.log(data)
        this.router.navigate(['/empolyees'])
      },
      error=>{
        console.log(error)
      })
     
  }
  saveEmployee()
  {
    this.addEmployee()
   // console.log(this.emp)
  }
}
