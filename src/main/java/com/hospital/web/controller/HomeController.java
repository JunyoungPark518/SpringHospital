package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hospital.web.composite.Complex;
import com.hospital.web.mapper.Mapper;

/**
 * ====================================
 * @filename: Patient Controller
 * @date: 2017-03-28
 * @author: babungv@gmail.com
 * @story: 
 * @method: 
 * ====================================
 */
@Controller
@SessionAttributes("context")
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		model.addAttribute("context",Complex.ContextFactory.create());
		return "index";
	}
	
	@RequestMapping(value="/home")
	public String home() {
		return "public:common/main";
	}
		
	@RequestMapping("/docLogin")
	public String docLogin() {
		logger.info("PatientController - docLogin() {}","ENTER");
		return "public:doctor/loginForm";
	}

	@RequestMapping("/mypage")
	public String myPage() {
		logger.info("PatientController - myPage() {}","ENTER");
		return "public:patient/mypage";
	}

	@RequestMapping("/treatlist")
	public String treatlist() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:patient/treatmentList";
	}

	@RequestMapping(value="/board/{num}")
	public String goBoard(@PathVariable String num, Model model) {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:board/articleList";
	}
	
	@RequestMapping(value="/customer")
	public String goCustomer() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:patient/loginForm";
	}
}
