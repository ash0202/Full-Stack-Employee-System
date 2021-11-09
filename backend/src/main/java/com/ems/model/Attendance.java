package com.ems.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Attendance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long attendanceId;
	private Long empId;
	private Date date;
	private String present;
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Attendance(Long attendanceId, Long empId, Date date, String present) {
		super();
		this.attendanceId = attendanceId;
		this.empId = empId;
		this.date = date;
		this.present = present;
	}
	public Long getAttendanceId() {
		return attendanceId;
	}
	public void setAttendanceId(Long attendanceId) {
		this.attendanceId = attendanceId;
	}
	public Long getEmpId() {
		return empId;
	}
	public void setEmpId(Long empId) {
		this.empId = empId;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getPresent() {
		return present;
	}
	public void setPresent(String present) {
		this.present = present;
	}
	
	
	
}
