package com.hospital.web.service;

import org.springframework.stereotype.Component;

import com.hospital.web.domain.DoctorDTO;

@Component
public interface DoctorService {
	public int join(DoctorDTO member) throws Exception;
	public DoctorDTO findById(DoctorDTO member) throws Exception;
	public DoctorDTO login(DoctorDTO member) throws Exception;
	public int change(DoctorDTO member) throws Exception;
	public int remove(DoctorDTO member) throws Exception;
}
