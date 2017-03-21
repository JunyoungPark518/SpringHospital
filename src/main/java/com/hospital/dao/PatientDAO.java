package com.hospital.dao;

import org.springframework.stereotype.Component;
import com.hospital.domain.PatientDTO;

@Component
public interface PatientDAO {
	public int insert(PatientDTO member) throws Exception;
	public PatientDTO selectById(PatientDTO member) throws Exception;
	public int update(PatientDTO member) throws Exception;
	public int delete(PatientDTO member) throws Exception;
}
