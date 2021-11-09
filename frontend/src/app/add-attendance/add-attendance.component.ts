import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  constructor(private attendanceService:AttendanceService,private router:Router) { }
  empIds:Array<number>=[]
  attendance:Attendance=new Attendance()
  ngOnInit(): void {
    this.attendanceService.getEmployeeId().subscribe(data=>{
      this.empIds=data
    })
  }
  addAttendance()
  {
   // console.log(this.attendance)
   this.attendanceService.addAttendance(this.attendance).subscribe(data=>{
     console.log(data)
    this.router.navigate(['/attendance'])
   })
  }

}
