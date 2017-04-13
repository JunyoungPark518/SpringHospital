package com.hospital.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
import com.hospital.web.service.PersonService;

@RestController
public class GetController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	@Autowired PersonService personService;
	@RequestMapping("/get/{group}/{target}")
	public @ResponseBody Object get(@PathVariable("group") String group, @PathVariable("target") String target) throws Exception { // @PathVariable 이 2개 이상일 경우 파라미터를 걸어주는 것이 fm
		logger.info("PersonController - detail() {}","ENTER");
		Object o = null;
		Map<String, Object> map = new HashMap<>();
		switch (group) {
		case "patient":
			logger.info("group.equals({})", group);
			map.put("group", patient.getGroup());
			map.put("key", Enums.PATIENT.val());
			map.put("value", target);
			o = personService.getPatient(map);
			logger.info("환자 조회 결과 이름({})", ((Patient)o).getName());
			break;
		case "doctor":
			o = getDoctor(target);
			break;
		case "nurse":
			o = getNurse(target);
			break;
		case "admin":
			o = getAdmin(target);
			break;
		default:
			break;
		}
		return o;
	}
	
	private Patient getPatient(String target){
		Person<?> person = new Person<Info>(new Patient());
		
		Patient patient = (Patient) person.getInfo();
		String temp = patient.getId();
		logger.info("GetController - getPatient() {}", "===temp값 :" + temp + " getPatient진입===");
		return patient;
	}
	
	private Doctor getDoctor(String target){
		return null;
	}
	
	private Nurse getNurse(String target){
		return null;
	}
	
	private Admin getAdmin(String target){
		return null;
	}
	
	@RequestMapping(value="/list/{group}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody List<?> list(@PathVariable String group, @RequestBody Command command) throws Exception{
		logger.info("PostController - list() {}", "ENTER"); 
		List<?> list = new ArrayList<>();
		switch (group) {
		case "patient":
			logger.info("group.equlas({})", group);
			list = getPatients();
			break;
		case "doctor":
			logger.info("group.equlas({})", group);
			list = getDoctors();
			break;
		case "nurse":
			logger.info("group.equlas({})", group);
			list = getNurses();
			break;
		case "admin":
			logger.info("group.equlas({})", group);
			list = getAdmins();
			break;
		default:
			break;
		}
		return list;
	}

	private List<?> getAdmins() {
		List<?> list = new ArrayList<>();
		return list;
	}

	private List<?> getNurses() {
		List<?> list = new ArrayList<>();
		return list;
	}

	private List<?> getDoctors() {
		List<?> list = new ArrayList<>();
		return list;
	}

	private List<?> getPatients() {
		List<?> list = new ArrayList<>();
		return list;
	}
}
