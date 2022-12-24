package com.student.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.student.project.entities.myData;

import com.student.project.dao.myDao;

@Service
public class myServiceImpl implements myService {
	
	@Autowired
	private myDao mdao;
	
	List<myData> list;
	
	public myServiceImpl() {}

	@Override
	public List<myData> getData() {
		return mdao.findAll();
	}

	@Override
	public void addData(myData data) {
		mdao.save(data);
	}

	@Override
	public myData getDataById(long id) {
		myData data = null;
		for(myData da : mdao.findAll()) {
			if(da.getId() == id) {
				data = da;
			}
		}
		return data;
	}

	@Override
	public void deleteData(long id) {
		myData data = mdao.getReferenceById(id);
		mdao.delete(data);
	}

	@Override
	public void updateData(myData data) {
		mdao.save(data);
	}
	
	
}
