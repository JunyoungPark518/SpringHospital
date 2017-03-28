package com.hospital.web.mapper;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hospital.web.imapper.IPatientMapper;

@Repository
public class PatientMapper implements IPatientMapper {
	private static final Logger logger = LoggerFactory.getLogger(PatientMapper.class);
	@Autowired
	private SqlSessionTemplate sqlSession;
	String namespace = "com.hospital.web.mapper.PatientMapper";
	@Override
	public int insert(Object member) throws Exception {
		logger.info("PatientMapper - insert���� {}", "ENTRY");
		return 0;
	}
	@Override
	public Object selectById(String id) throws Exception {
		logger.info("PatientMapper - selectById���� {}", "ENTRY");
		return sqlSession.selectOne(namespace+".selectById",id);
	}
	@Override
	public int update(Object member) throws Exception {
		logger.info("PatientMapper - update���� {}", "ENTRY");
		return 0;
	}
	@Override
	public int delete(Object member) throws Exception {
		logger.info("PatientMapper - delete���� {}", "ENTRY");
		return 0;
	}
	@Override
	public int count() {
		logger.info("PatientMapper - count���� {}", "ENTRY");
		return sqlSession.selectOne(namespace+".count");
	}
	@Override
	public int exist(String id) throws Exception {
		logger.info("PatientMapper - exist���� {}", "ENTRY");
		return sqlSession.selectOne(namespace+".exist", id);
	}
}
