package com.hospital.web.mapper;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	public int insert(Object member) throws Exception;
	public Object selectById(String id) throws Exception;
	public int update(Object member) throws Exception;
	public int delete(Object member) throws Exception;
	public int count();
	public int exist(String id) throws Exception;
}
