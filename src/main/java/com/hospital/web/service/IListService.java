package com.hospital.web.service;

import com.hospital.web.domain.Chart;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface IListService {
	public java.util.List<Chart> execute(java.util.Map<?,?> map) throws Exception;
}
