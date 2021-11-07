package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.exception.ResoruceNotFoundException;
import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {

	@Autowired
	private EmployeeRepository er;
	
	@RequestMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return er.findAll();
	}
	
	@PostMapping("/employees")
	private Employee createEmployee(@RequestBody Employee emp)
	{
		return er.save(emp);
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
	{
		Employee emp=er.findById(id).orElseThrow(()-> new ResoruceNotFoundException("Employee not exits with id "+id));
		return ResponseEntity.ok(emp);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee emp)
	{
		Employee update=er.findById(id).orElseThrow(()-> new ResoruceNotFoundException("Employee not exits with id "+id));
		update.setEmail(emp.getEmail());
		update.setFirstName(emp.getFirstName());
		update.setLastName(emp.getLastName());
		
		Employee save=er.save(update);
		return ResponseEntity.ok(save); 		
	}
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id)
	{
		Employee delete=er.findById(id).orElseThrow(()-> new ResoruceNotFoundException("Employee not exits with id "+id));
		er.delete(delete);
		return ResponseEntity.ok(delete);
		
	}
}
