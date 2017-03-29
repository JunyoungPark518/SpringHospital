package com.hospital.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;

@Repository
public interface Mapper {
	public int insertPatient(Patient person) throws Exception;
	public int insertDoctor(Doctor person) throws Exception;
	public int insertNurse(Nurse person) throws Exception;
	public Patient findPatient(Map<?,?> person) throws Exception;
	public Doctor findDoctor(Map<?,?> person) throws Exception;
	public Nurse findNurse(Map<?,?> person) throws Exception;
	public List<Patient> findPatients(Map<?,?> person) throws Exception;
	public List<Doctor> findDoctors(Map<?,?> person) throws Exception;
	public List<Nurse> findNurses(Map<?,?> person) throws Exception;
	public int updatePatient(Patient person) throws Exception;
	public int updateDoctor(Doctor person) throws Exception;
	public int updateNurse(Nurse person) throws Exception;
	public int deletePatient(Patient person) throws Exception;
	public int deleteDoctor(Doctor person) throws Exception;
	public int deleteNurse(Nurse person) throws Exception;
	public int count();
	public int exist(Map<?,?> person) throws Exception;
}
