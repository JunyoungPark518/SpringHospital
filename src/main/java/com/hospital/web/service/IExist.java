package com.hospital.web.service;

import org.springframework.stereotype.Component;

@Component
public interface IExist {
	public int exist(Object o) throws Exception;
}
