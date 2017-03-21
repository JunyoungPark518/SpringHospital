package com.hospital.dao;

import org.springframework.stereotype.Component;
import com.hospital.domain.DoctorDTO;

@Component
public interface DoctorDAO {
	public int insert(DoctorDTO member) throws Exception;
	public DoctorDTO selectById(DoctorDTO member) throws Exception;
	public int update(DoctorDTO member) throws Exception;
	public int delete(DoctorDTO member) throws Exception;
}
