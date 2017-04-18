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

import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.domain.Person;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.PersonService;

@RestController
public class PersonController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired PersonService personService;
	@Autowired Patient patient;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	@Autowired Admin admin;
	@RequestMapping(value="/login", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> login(@RequestBody Map<String, String> paramMap) throws Exception{
		Map<String, String> map = new HashMap<>();
		logger.info("PersonController login {}", "ENTER");
		String id = paramMap.get("id");
		String pw = paramMap.get("pw");
		String[] tbArr = {"Patient/pat_id/"+id, "Doctor/doc_id/"+id, "Nurse/nur_id/"+id};
		// exist
		for(int i=0; i<tbArr.length; i++){
			paramMap.put("group", tbArr[i].split("/")[0]);
			paramMap.put("idType", tbArr[i].split("/")[1]);
			if(personService.exist(paramMap)==1) {
				break;
			}
		}
		
		switch (paramMap.get("group")) {
		case "Patient":
			patient = personService.getPatient(paramMap);
			if(patient.getPass().equals(pw)){
				logger.info("비밀번호 일치");
				map.put("group", "환자");
				map.put("name",patient.getName());
				map.put("result", "success");
				map.put("source", "/patient/main");
			} else {
				logger.info("비밀번호 불일치 {}", pw);
				map.put("result", "fail");
			}
			break;
		case "Doctor":
			doctor = personService.getDoctor(paramMap);
			if(doctor.getPass().equals(pw)){
				logger.info("비밀번호 일치");
				map.put("group", "의사");
				map.put("name",doctor.getName());
				map.put("result", "success");
				map.put("source", "/dcotor/main");
			} else {
				logger.info("비밀번호 불일치 {}", pw);
				map.put("result", "fail");
			}
			break;
		case "Nurse":
			nurse = personService.getNurse(paramMap);
			if(nurse.getPass().equals(pw)){
				logger.info("비밀번호 일치");
				map.put("group", "간호사");
				map.put("name",nurse.getName());
				map.put("result", "success");
				map.put("source", "/nurse/main");
			} else {
				logger.info("비밀번호 불일치 {}", pw);
				map.put("result", "fail");
			}
			break;
		case "Admin":
			admin = personService.getAdmin(paramMap);
			if(admin.getPass().equals(pw)){
				map.put("group", "관리자");
				map.put("name", admin.getName());
				map.put("result", "success");
				map.put("source", "/admin/main");
			} else {
				map.put("result", "fail");
			}
			break;
		default:
			logger.info("아이디 존재 X");
			map.put("source", "/login");
			break;
		}

		return map;
	}
}
