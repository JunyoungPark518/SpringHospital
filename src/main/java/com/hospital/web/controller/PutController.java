package com.hospital.web.controller;

import java.util.HashMap;
import java.util.Map;

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
public class PutController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	
	@RequestMapping(value="/put/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> put(@PathVariable String group, @SuppressWarnings("rawtypes") @RequestBody Person target) throws Exception {
		logger.info("PersonController - put() {}","ENTER");
		Map<?,?> map = new HashMap<>();
		if(group.equals("")) { group = "patient";}
		switch (map.get("type").toString()) {
		case "patient": map = putPatient(target);break;
		case "doctor": map = putDoctor(target);break;
		case "nurse": map = putNurse(target);break;
		case "admin": map = putAdmin(target);break;
		default:
			break;
		}
		return map;
	}
	
	private Map<?, ?> putAdmin(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> putNurse(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> putDoctor(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> putPatient(Person target) {
		// TODO Auto-generated method stub
		return null;
	}
}
