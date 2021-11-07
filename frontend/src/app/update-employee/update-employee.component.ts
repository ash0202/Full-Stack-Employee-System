import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  emp:Employee=new Employee()
  id:number=0;
  constructor(private service:EmployeeService,private activatedRoute:ActivatedRoute,private route:Router) {

   }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe (data=>{
      this.emp=data

    },error=>{
      console.log(error)
    })
  }
  saveData()
  {
    console.log('called')
    this.service.updateEmployee(this.emp.id,this.emp).subscribe((data)=>{
      this.route.navigate(['/empolyees'])
    });
  }
}
