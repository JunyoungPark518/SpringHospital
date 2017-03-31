package com.hospital.web.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hospital.web.domain.Command;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;

@Controller
@SessionAttributes("person")
public class PersonController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping("/docDetail/{docID}")
	public String goDocDetail(@PathVariable String docID, Model model) {
		logger.info("PersonController - goDocDetail() {}","ENTER");
		logger.info("PersonController - docID={}",docID);
		if(docID.equals("")) { 	return "redirect:/{permission}/login";	}
		return "public:patient/docDetail";
	}
	
	@RequestMapping("/register")
	public String register() throws Exception {
		logger.info("PersonController - register() {}","ENTER");
		return "public:patient/register";
	}
	
	@RequestMapping(value="/register/{type}", method=RequestMethod.POST)
	public String register(@PathVariable String type, @RequestBody Map<String, Object> map, Command command) throws Exception {
		logger.info("PersonController - register2() {}","ENTER");
		Person<?> person = command.process(map).getPersonInfo();
		if(type.equals("")) { type = "patient";}
		map.put("type", type);
		int result = 0;
		switch (map.get("type").toString()) {
		case "patient":
			result = mapper.insertPatient(person);
			break;
		case "doctor":
			result = mapper.insertDoctor(person);
			break;
		case "nurse":
			result = mapper.insertNurse(person);
			break;
		default:
			break;
		}
		return (result==1) ? "public:patient/register2" : "redirect:/{" + type + "}/register";
	}
}


