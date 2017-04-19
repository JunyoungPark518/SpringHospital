package com.hospital.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Chart;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.ChartService;

@org.springframework.web.bind.annotation.RestController
public class ChartController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	@Autowired Patient patient;
	@Autowired Admin admin;
	@Autowired ChartService service;
	
	@RequestMapping(value="/get/chart", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getChart(@RequestBody Patient p) throws Exception {
		logger.info("TreatmentController - getChart() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("id", p.getId());
		List<Chart> list = service.chartList(map);
		logger.info("TreatmentController - getChart() {}",list);
		if(list.isEmpty()){
			System.out.println("list.isEmpty()");
			map.put("result", "fail");
		} else {
			System.out.println("list fulled");
			map.put("result", "success");
			map.put("list", list);
		}
		return map;
	}
}
