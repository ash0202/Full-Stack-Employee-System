package com.ems.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Attendance;
import com.ems.model.Employee;
import com.ems.repository.AttendanceRepository;
import com.ems.repository.EmployeeRepository;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendanceController {

	@Autowired
	private AttendanceRepository ar;
	@Autowired
	private EmployeeRepository er;
	@GetMapping("/all")
	public List<Attendance> getAllAttendance()
	{
		return ar.findAll();
	}
	@PostMapping("/add")
	public Attendance addAttendance(@RequestBody Attendance add)
	{
		return ar.save(add);
	}
	@GetMapping("/ids")
	public List<Long> getEmployeeIds()
	{
		List<Employee> emp=er.findAll();
		List<Long> ids=new ArrayList<Long>();
		for(Employee e:emp)
			ids.add(e.getId());
		
		return ids;
	}
}
