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
public class DeleteController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	
	@RequestMapping(value="/delete/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> delete(@PathVariable String group, @SuppressWarnings("rawtypes") @RequestBody Person target, Command command) throws Exception {
		logger.info("PersonController - delete() {}","ENTER");
		Map<?,?> map = new HashMap<>();
		if(group.equals("")) { group = "patient";}
		switch (map.get("type").toString()) {
		case "patient": map = deletePatient(target);break;
		case "doctor": map = deleteDoctor(target);break;
		case "nurse": map = deleteNurse(target);break;
		case "admin": map = deleteAdmin(target);break;
		default:
			break;
		}
		return map;
	}

	private Map<?, ?> deleteAdmin(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> deleteNurse(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> deleteDoctor(Person target) {
		// TODO Auto-generated method stub
		return null;
	}

	private Map<?, ?> deletePatient(Person target) {
		// TODO Auto-generated method stub
		return null;
	}
}
