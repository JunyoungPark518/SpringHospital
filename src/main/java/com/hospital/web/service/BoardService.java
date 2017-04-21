package com.hospital.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.hospital.web.domain.Article;
import com.hospital.web.mapper.Mapper;

@org.springframework.stereotype.Service
public class BoardService {
	private static final Logger logger = LoggerFactory.getLogger(PersonService.class);
	@Autowired Mapper mapper;
	
	public List<Article> articleList(Map<?,?> param) throws Exception{
		logger.info("BoardService - articleList()  {}","ENTER"); 
		IGetService service = (map) -> mapper.boardList(map);
		@SuppressWarnings("unchecked")
		List<Article> list = (List<Article>) service.execute(param);
		return list;
	}
	
	public Article find1Article(Map<?,?> map) throws Exception {
		IGetService service = (o) -> mapper.find1Article(o);
		return (Article) service.execute(map);
	}
}
