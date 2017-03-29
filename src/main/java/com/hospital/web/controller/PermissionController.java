package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hospital.web.domain.Info;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.CRUD;
import com.hospital.web.util.Util;

@Controller
public class PermissionController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping("/loginForm")
	public String patLogin() {
		logger.info("Permission - patLogin() {}","ENTER");
		return "public:patient/loginForm";
	}
	
	@RequestMapping(value="/{permission}/login", method=RequestMethod.POST)
	public String patLogin(@RequestParam("id") String id, 
			@RequestParam("pw") String pw, @PathVariable String permission, Model model) throws Exception {
		String movePosition = "";
		logger.info("Permission - patLogin(model) PathVarialbe: {}",permission);
		logger.info("Permission - id, pw: {}",id+","+pw);
		Person<?> person = new Person<Info>(new Patient());
		Patient patient = (Patient) person.getInfo();
		patient.setId(id);
		patient.setPass(pw);
		switch(permission) {
		case "patient":
			if((Integer) new CRUD.Service() {
				@Override public Object execute(Object o) throws Exception { 
					logger.info("--------------ID ?  {} ---------", o);
					return mapper.exist(id);
				}
			}.execute(patient.getId())==0) {
				logger.info("DB RESULT: {}", "ID not exist");
				movePosition = "public:patient/loginForm";
			} else {
				logger.info("DB RESULT: {}", "ID exist");
				patient = (Patient) new CRUD.Service() { 
					@Override 
					public Object execute(Object o) throws Exception { 
						return (Patient) mapper.selectById(id);
						}
					}.execute(patient);
				if(patient.getPass().equals(pw)) {
					logger.info("DB RESULT: {}", "Success");
					String[] getInfo = Util.defineInfo(patient);
					model.addAttribute("patient", patient);
					model.addAttribute("birth",getInfo[0]);
					model.addAttribute("age",getInfo[1]);
					model.addAttribute("gender",getInfo[2]);
					logger.info("DB RESULT: {}",patient);
					movePosition = "public:patient/patDetail";
				} else {
					logger.info("DB RESULT: {}", "Password not match");
					movePosition = "public:patient/loginForm";
				}
			}
			break;
		default:
			break;
		}
		return movePosition;
	}
}
