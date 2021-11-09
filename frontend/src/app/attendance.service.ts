import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/attendance"
  getAttendance() : Observable<Attendance[]>
  {
    return this.http.get<Attendance[]>(`${this.baseUrl}/all`);
  }
  getEmployeeId()
  {
    return this.http.get<Array<number>>(`${this.baseUrl}/ids`)
  }
  addAttendance(attendance:Attendance):Observable<Attendance>
  {
    return this.http.post<Attendance>(`${this.baseUrl}/add`,attendance)
  }
}
