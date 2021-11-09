import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path: "empolyees",
    component: EmployeeListComponent
  },
  {
    path: '',
    redirectTo: 'empolyees',
    pathMatch: 'full'
  },

  {
    path: 'create',
    component: EmployeeCreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'attendance',
    component: AttendanceListComponent
  },
  {
    path: 'add-attendance',
    component: AddAttendanceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
