package com.hospital.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.hospital.web.domain.Article;
import com.hospital.web.domain.Chart;
import com.hospital.web.domain.Doctor;
import com.hospital.web.domain.Nurse;
import com.hospital.web.domain.Patient;

@Repository
public interface Mapper {
	public int insertPatient(Object person) throws Exception;
	public int insertDoctor(Object person) throws Exception;
	public int insertNurse(Object person) throws Exception;
	public int insertAdmin(Object person) throws Exception;
	public Patient findPatient(Map<?,?> person) throws Exception;
	public Doctor findDoctor(Map<?,?> person) throws Exception;
	public Nurse findNurse(Map<?,?> person) throws Exception;
	public Object findAdmin(Object object);
	public List<Chart> findChart(Map<?,?> chart) throws Exception;
	public Chart find1Chart(Map<?,?> map) throws Exception;
	public Article find1Article(Map<?,?> map) throws Exception;
	public List<Article> boardList(Map<?,?> map) throws Exception;
	public List<Patient> findPatients(Map<?,?> person) throws Exception;
	public List<Doctor> findDoctors(Map<?,?> person) throws Exception;
	public List<Nurse> findNurses(Map<?,?> person) throws Exception;
	public int updatePatient(Patient person) throws Exception;
	public int updateDoctor(Doctor person) throws Exception;
	public int updateNurse(Nurse person) throws Exception;
	public int delete(Map<?,?> person) throws Exception;
	public int count();
	public int exist(Map<?,?> person) throws Exception;
	public int registerChartFile(Object chart) throws Exception;
}
