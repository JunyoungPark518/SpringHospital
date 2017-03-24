package com.hospital.web.controller;

import javax.servlet.http.HttpSession;

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
import com.hospital.web.domain.ContextDTO;

@Controller
@SessionAttributes("context")
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpSession session) {
		session.setAttribute("context", Complex.ContextFactory.create());
		return "index";
	}
	
	@RequestMapping(value="/home")
	public String home() {
		return "public:common/main";
	}
	
	@RequestMapping("/patRegister")
	public String patRegister() {
		logger.info("PatientController - patRegister() {}","ENTER");
		return "public:patient/register";
	}
	
	@RequestMapping("/patRegister2")
	public String patRegister2() {
		logger.info("PatientController - patRegister2() {}","ENTER");
		return "public:patient/register2";
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

	@RequestMapping("/patLoginForm")
	public String patLogin() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:patient/loginForm";
	}
	
	@RequestMapping(value="/patLogin", method=RequestMethod.POST)
	public String patLogin(Model model) {
		logger.info("PatientController - patLogin(model) {}","POST");
		model.addAttribute("name","ȫ�浿");
		return "public:patient/patDetail";
	}
	
	@RequestMapping("/docDetail/{docID}")
	public String goDocDetail(@PathVariable String docID, Model model) {
		logger.info("PatientController - goDocDetail() {}","ENTER");
		logger.info("PatientController - docID={}",docID);
		return "public:patient/docDetail";
	}
	
	@RequestMapping("")
	public String goPatDoctorInfo() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:board/articleList";
	}
	
	@RequestMapping(value="/board")
	public String goBoard() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:board/articleList";
	}
	
	@RequestMapping(value="/customer")
	public String goCustomer() {
		logger.info("PatientController - patLogin() {}","ENTER");
		return "public:patient/loginForm";
	}
}
