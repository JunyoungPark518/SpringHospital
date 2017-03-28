package com.hospital.web.serviceImpl;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.web.controller.HomeController;
import com.hospital.web.dao.PatientDAO;
import com.hospital.web.domain.PatientDTO;
import com.hospital.web.mapper.PatientMapper;
import com.hospital.web.service.IPatientService;

@Service
public class PatientService implements IPatientService{
	private static final Logger logger = LoggerFactory.getLogger(PatientService.class);
	@Autowired PatientMapper mapper;
	@Override
	public int join(PatientDTO member) throws Exception {
		logger.info("PatientService - join() {}","ENTER");
		return mapper.insert(member);
	}

	@Override
	public PatientDTO findById(String id) throws Exception {
		logger.info("PatientService - findById() {}","ENTER");
		return (PatientDTO) mapper.selectById(id);
	}

	@Override
	public PatientDTO login(PatientDTO member) throws Exception {
		logger.info("PatientService - login() {}","ENTER");
		return findById(member.getPatID());
	}
	
	@Override
	public int change(PatientDTO member) throws Exception {
		logger.info("PatientService - change() {}","ENTER");
		return mapper.update(member);
	}

	@Override
	public int remove(PatientDTO member) throws Exception {
		logger.info("PatientService - remove() {}","ENTER");
		return mapper.delete(member);		
	}

	@Override
	public String[] getBirth(PatientDTO member) {
		String[] arr = new String[3];
		boolean flag = member.getPatJumin().charAt(7)=='3' || member.getPatJumin().charAt(7)=='4';
		arr[0] = flag ? "20" + member.getPatJumin().substring(0, 2) + "년 " + member.getPatJumin().substring(2, 4) + "월 " + member.getPatJumin().substring(4, 6) + "일" : "19" + member.getPatJumin().substring(0, 2) + "년 " + member.getPatJumin().substring(2, 4) + "월 " + member.getPatJumin().substring(4, 6) + "일";
		arr[1] = flag ? String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 2000 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "세" : String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 1900 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "세";
		arr[2] = member.getPatGen().equals("M") ? "남자" : "여자";
		return arr;
	}

	@Override
	public int count() {
		logger.info("PatientService - count() {}","ENTER");
		return mapper.count();
	}
	
}
