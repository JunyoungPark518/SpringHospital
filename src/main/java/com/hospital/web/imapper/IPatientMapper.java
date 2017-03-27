package com.hospital.web.imapper;

import org.springframework.stereotype.Component;

@Component
public interface IPatientMapper {
	public int insert(Object member) throws Exception;
	public Object selectById(String id) throws Exception;
	public int update(Object member) throws Exception;
	public int delete(Object member) throws Exception;
}
