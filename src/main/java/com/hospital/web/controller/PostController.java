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
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.IPostService;
import com.hospital.web.service.PersonService;

@RestController
public class PostController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired PersonService personService;
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	
	@RequestMapping(value="/post/{group}", method=RequestMethod.POST, consumes="application/json") // spring p291
	public @ResponseBody Map<?,?> register(@PathVariable String group, @RequestBody Map<String, String> param) throws Exception {
		logger.info("PersonController - register() {}","ENTER");
		Map<String,String> map = new HashMap<>();
		switch (group) {
		case "patient": 
			map = (Map<String, String>) postPatient(param);
			break;
		case "doctor": 
			map = (Map<String, String>) postDoctor(param);
			break;
		case "nurse": 
			map = (Map<String, String>) postNurse(param);
			break;
		case "admin": 
			map = (Map<String, String>) postAdmin(param);
			break;
		default:
			break;
		}
		return map;
	}

	private Map<?,?> postPatient(Object o) throws Exception {
		Map<String,String> map = new HashMap<>();
		IPostService service = (param) -> mapper.insertPatient(param);
		if(service.execute(o)==1){
			map.put("result", "success");
		} else {
			map.put("result", "fail");
		}
		return map;
	}
	private Map<?,?> postDoctor(Object o) throws Exception {
		Map<String,String> map = new HashMap<>();
		IPostService service = (param) -> mapper.insertDoctor(param);
		if(service.execute(o)==1){
			map.put("result", "success");
			map.put("name", ((Doctor)o).getName());
		} else {
			map.put("result", "fail");
		}
		return map;
	}
	private Map<?,?> postNurse(Object o) throws Exception {
		Map<String,String> map = new HashMap<>();
		IPostService service = (param) -> mapper.insertNurse(param);
		if(service.execute(o)==1){
			map.put("result", "success");
		} else {
			map.put("result", "fail");
		}
		return map;
	}
	private Map<?,?> postAdmin(Object o) throws Exception {
		Map<String,String> map = new HashMap<>();
//		Person<?> person = new Person<Info>(new Admin());
//		Admin admin = (Admin) person.getInfo();
		IPostService service = (param) -> mapper.insertAdmin(param);
		if(service.execute(o)==1){
			map.put("result", "success");
		} else {
			map.put("result", "fail");
		}
		return map;
	}
}


