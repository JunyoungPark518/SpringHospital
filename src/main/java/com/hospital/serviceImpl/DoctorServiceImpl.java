package com.hospital.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hospital.dao.DoctorDAO;
import com.hospital.domain.DoctorDTO;
import com.hospital.service.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {
	@Autowired DoctorDAO dao;

	@Override
	public int join(DoctorDTO member) throws Exception {
		return dao.insert(member);
	}
	
	@Override
	public DoctorDTO findById(DoctorDTO member) throws Exception {
		return dao.selectById(member);
	}
	
	@Override
	public DoctorDTO login(DoctorDTO member) throws Exception {
		return findById(member);
	}
	
	@Override
	public int change(DoctorDTO member) throws Exception {
		return dao.update(member);
	}
	
	@Override
	public int remove(DoctorDTO member) throws Exception {
		return dao.delete(member);
	}
	
}
