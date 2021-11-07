import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8080/api/employees"
  constructor(private http:HttpClient) {
    
  }

  getAllEmployee() :Observable<Employee[]>
  {
    return this.http.get <Employee[]>(`${this.baseUrl}`)
  }
  addEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(`${this.baseUrl}`,employee);
  }
  getEmployeeById(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }
  updateEmployee(id:number,update:Employee) : Observable<Object >
  {
    return  this.http.put(`${this.baseUrl}/${id}`,update)
  }
  deleteEmployee(id:number): Observable<Object>
  {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
