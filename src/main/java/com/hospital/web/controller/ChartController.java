package com.hospital.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.hospital.web.domain.Admin;
import com.hospital.web.domain.Chart;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.ChartService;
import com.hospital.web.service.PersonService;

@org.springframework.web.bind.annotation.RestController
public class ChartController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired Doctor doctor;
	@Autowired Nurse nurse;
	@Autowired Patient patient;
	@Autowired Admin admin;
	@Autowired Chart chart;
	@Autowired ChartService service;
	@Autowired PersonService pService;
	@RequestMapping(value="/get/chart", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> getChart(@RequestBody Patient p) throws Exception {
		logger.info("ChartController - getChart() {}","ENTER");
		Map<String, Object> map = new HashMap<>();
		map.put("id", p.getId());
		List<Chart> list = service.chartList(map);
		if(list.isEmpty()){
			System.out.println("list.isEmpty()");
			map.put("result", "fail");
		} else {
			System.out.println("list fulled");
			map.put("result", "success");
			map.put("list", list);
			map.put("chart", list.get(0));
		}
		return map;
	}
	@RequestMapping(value="/post/chart/img", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> fileUpload(MultipartHttpServletRequest request) throws Exception{
		Map<String, Object> map = new HashMap<>();
//		Map<String, Object> param = sessionChartId(c, session)
		logger.info("ChartController - fileUpload () {}","ENTER");
//		System.out.println("fileupload     param id : " + param.get("id"));
//		Iterator<String> it = request.getFileNames();
//		if(it.hasNext()){
//			MultipartFile file = request.getFile(it.next());
//			logger.info("file upload result: {}", "success");
//			logger.info("upload file name: {}", file.getName());
//			logger.info("upload file size: {}",file.getSize());
//			logger.info("upload file exist:" + file.isEmpty());
//			logger.info("upload file original name: {}", file.getOriginalFilename());
//			String rootPath = request.getSession().getServletContext().getRealPath("/");
//			String uploadPath = "resources/img/";
//			String filename = file.getOriginalFilename();
//			map.put("id", param.get("id"));
//			chart = service.find1Chart(param);
//			chart.setChartContents(filename);
//			int rs = service.registerChartFile(chart);
//			map.put("imgsrc", rootPath + uploadPath + filename);
//			map.put("chartId", chart.getChartId());
//			File dest = new File(rootPath + uploadPath + filename);
//			file.transferTo(dest);
//			map.put("result", "success");
//		} else {
//			logger.info("file upload result: fail");
//			map.put("result", "fail");
//		}
		return map;
	}
	
	@RequestMapping(value="/post/chart/id", method=RequestMethod.POST)
	public @ResponseBody Map<?,?> sessionChartId(@RequestBody Map<String, String> param, HttpSession session){
		Map<String, Object> map = new HashMap<>();
		String chartid = param.get("id");
		System.out.println("sessionChartId ENTRY c : " + chartid);
		if(chartid.equals("")) {
			map.put("result", "fail");
		} else {
			session.setAttribute("chartId", chartid);
			map.put("chartId", chartid);
			map.put("result", "success");
			System.out.println(session.getAttribute("chartId"));
		}
		return map;
	}
}
