package com.hospital.web.controller;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.web.domain.*;

@RestController
public class PostController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	
	@RequestMapping(value="/post/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> register(@PathVariable String group, @SuppressWarnings("rawtypes") @RequestBody Person target, Command command) throws Exception {
		logger.info("PersonController - register() {}","ENTER");
		Map<?,?> map = new HashMap<>();
		if(group.equals("")) { group = "patient";}
		switch (map.get("type").toString()) {
		case "patient": map = postPatient(target);break;
		case "doctor": map = postDoctor(target);break;
		case "nurse": map = postNurse(target);break;
		case "admin": map = postAdmin(target);break;
		default:
			break;
		}
		return map;
	}

	private Map<?,?> postPatient(Object o) {
		Map<?,?> map = new HashMap<>();
		Person<?> person = new Person<Info>(new Patient());
		Patient patient = (Patient) person.getInfo();
		patient.getId();
		logger.info("PostController - postPatient() {}", patient.getId() + "===pat_id===");
		patient.getGen();
		patient.setJob("환자");
		patient.getJumin();
		patient.getName();
		logger.info("PostController - postPatient() {}", patient + "===update진입===");
		return map;
	}
	private Map<?,?> postDoctor(Object o) {
		Map<?,?> map = new HashMap<>();
		Person<?> person = new Person<Info>(new Patient());
		Doctor doctor = (Doctor) person.getInfo();
		return map;
	}
	private Map<?,?> postNurse(Object o) {
		Map<?,?> map = new HashMap<>();
		Person<?> person = new Person<Info>(new Patient());
		Nurse nurse = (Nurse) person.getInfo();
		return map;
	}
	private Map<?,?> postAdmin(Object o) {
		Map<?,?> map = new HashMap<>();
		Person<?> person = new Person<Info>(new Patient());
		Admin admin = (Admin) person.getInfo();
		return map;
	}
}


