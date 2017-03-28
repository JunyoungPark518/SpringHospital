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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hospital.web.composite.Complex;
import com.hospital.web.domain.Patient;
import com.hospital.web.mapper.PatientMapper;
import com.hospital.web.service.CRUD;
import com.hospital.web.util.Util;

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
	@Autowired Patient patient;
	@Autowired PatientMapper mapper;
	
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
	public String patLogin(@RequestParam("id") String id, 
			@RequestParam("pw") String pw, Model model) throws Exception {
		String movePosition = "";
		logger.info("PatientController - patLogin(model) {}","POST");
		logger.info("PatientController - id, pw: {}",id+","+pw);
		patient.setPatID(id);
		patient.setPatPass(pw);
		if((Integer) new CRUD.Service() {
			@Override public Object execute(Object o) throws Exception { 
				logger.info("--------------ID ?  {} ---------", o);
				return mapper.exist(id);
			}
		}.execute(patient.getPatID())==0) {
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
			if(patient.getPatPass().equals(pw)) {
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
		return movePosition;
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
