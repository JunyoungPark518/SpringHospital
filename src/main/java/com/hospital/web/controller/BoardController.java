package com.hospital.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.web.domain.Article;
import com.hospital.web.mapper.Mapper;
import com.hospital.web.service.BoardService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Mapper mapper;
	@Autowired Article article;
	@Autowired BoardService service;
	@RequestMapping(value="/list/bbs/{pageNo}")
	public @ResponseBody Map<?,?> articleList(@PathVariable String pageNo) throws Exception {
		logger.info("BoardController - articleList() {}","ENTER");
		logger.info("넘어온 페이지 넘버 - {}",pageNo);
		Map<String, Object> map = new HashMap<>();
		map.put("start", "1");
		map.put("end", "10");
		List<Article> list = service.articleList(map);
		map.put("list", list);
		map.put("count", list.size());
		return map;
	}
	
	@RequestMapping("/get/bbs/{seq}")
	public String find(@PathVariable String seq) {
		logger.info("BoardController - find() {}","ENTER");
		return "public:board/articleList";
	}

}
