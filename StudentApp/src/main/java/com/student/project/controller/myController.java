package com.student.project.controller;
import com.student.project.entities.myData;
import com.student.project.service.myService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class myController {
	
	@Autowired
	private myService s;
	
	@GetMapping("/home")
	public String home() {
		return "Home";
	}
	
	@GetMapping("/my")
	public List<myData> getData(){
		return this.s.getData();
	}
	
	@GetMapping("/my/{id}")
	public myData getDataById(@PathVariable String id) {
		return s.getDataById(Long.parseLong(id));
	}
	
	@PostMapping("/my")
	public void addData(@RequestBody myData data)
	{
		this.s.addData(data);
	}

	@DeleteMapping("/my/{id}")
	public void deleteData(@PathVariable String id) {
		this.s.deleteData(Long.parseLong(id));
	}
	
	@PutMapping("/my")
	public void updateData(@RequestBody myData data){
		this.s.updateData(data);
	}
}
