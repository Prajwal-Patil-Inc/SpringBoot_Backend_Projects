package com.student.project.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class myData {
	
	@Id
	private long id;
	private String name;
	private String descr;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	public myData(long id, String name, String descr) {
		super();
		this.id = id;
		this.name = name;
		this.descr = descr;
	}
	public myData() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "myData [id=" + id + ", name=" + name + ", desc=" + descr + "]";
	}
	

}
