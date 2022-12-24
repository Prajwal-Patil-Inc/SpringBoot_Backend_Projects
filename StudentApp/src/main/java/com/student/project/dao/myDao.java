package com.student.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.project.entities.myData;


public interface myDao extends JpaRepository<myData, Long>{

}
