package com.hospital.web.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.web.dao.PatientDAO;
import com.hospital.web.domain.PatientDTO;
import com.hospital.web.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService{
	@Autowired PatientDAO dao;

	@Override
	public int join(PatientDTO member) throws Exception {
		return dao.insert(member);
	}

	@Override
	public PatientDTO findById(PatientDTO member) throws Exception {
		return dao.selectById(member);
	}

	@Override
	public PatientDTO login(PatientDTO member) throws Exception {
		return findById(member);
	}
	
	@Override
	public int change(PatientDTO member) throws Exception {
		return dao.update(member);
	}

	@Override
	public int remove(PatientDTO member) throws Exception {
		return dao.delete(member);		
	}

	@Override
	public String[] getBirth(PatientDTO member) {
		String[] arr = new String[3];
//		boolean flag = member.getPatJumin().charAt(7)=='3' || member.getPatJumin().charAt(7)=='4';
//		arr[0] = flag ? "20" + member.getPatJumin().substring(0, 2) + "년 " + member.getPatJumin().substring(2, 4) + "월 " + member.getPatJumin().substring(4, 6) + "일" : "19" + member.getPatJumin().substring(0, 2) + "년 " + member.getPatJumin().substring(2, 4) + "월 " + member.getPatJumin().substring(4, 6) + "일";
//		arr[1] = flag ? String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 2000 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "세" : String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 1900 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "세";
//		arr[2] = member.getPatGen().equals("M") ? "남자" : "여자";
		return arr;
	}
	
}
