package com.hospital.web.service;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.hospital.web.domain.Chart;
import com.hospital.web.mapper.Mapper;

@org.springframework.stereotype.Service
public class ChartService {
	private static final Logger logger = LoggerFactory.getLogger(PersonService.class);
	@Autowired Mapper mapper;
	
	@Transactional // 돈 계산을 할때 사용
	public List<Chart> chartList(Map<?,?> paramMap)throws Exception{
		logger.info("ChartService - getChart() {}","ENTER");
		IGetService service= (map)->mapper.findChart(map); 
		List<Chart> list = (List<Chart>) service.execute(paramMap);
		logger.info("ChartService - getChart() list : {}", list);
		return list;
	}
	public int registerChartFile(Chart c) throws Exception{
		IPostService service = (o) -> mapper.registerChartFile(o);
		return service.execute(c);
	}
	public Chart find1Chart(Map<?,?> map) throws Exception {
		IGetService service = (o) -> mapper.find1Chart(o);
		return (Chart) service.execute(map);
	}
}
