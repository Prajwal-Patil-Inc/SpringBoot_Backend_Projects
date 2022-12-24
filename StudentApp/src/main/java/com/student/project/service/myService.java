package com.student.project.service;

import java.util.List;

import com.student.project.entities.myData;

public interface myService {

	public List<myData> getData();

	public void addData(myData data);

	public myData getDataById(long id);

	public void deleteData(long id);

	public void updateData(myData data);
	
}
