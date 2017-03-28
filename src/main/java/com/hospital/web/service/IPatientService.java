package com.hospital.web.service;

import org.springframework.stereotype.Component;

import com.hospital.web.domain.PatientDTO;

@Component
public interface IPatientService {
	public int join(PatientDTO member) throws Exception;
	public PatientDTO findById(String id) throws Exception;
	public PatientDTO login(PatientDTO member) throws Exception;
	public int change(PatientDTO member) throws Exception;
	public int remove(PatientDTO member) throws Exception;
	public int count();
	public String[] getBirth(PatientDTO member);
}
