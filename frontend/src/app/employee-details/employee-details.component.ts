import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number=0
  emp:Employee=new Employee()
  prefix:string="EMPID"
  constructor(private route:ActivatedRoute,private service:EmployeeService) { 
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.service.getEmployeeById(this.id).subscribe(data=>{
      this.emp=data
    })
  }

}
