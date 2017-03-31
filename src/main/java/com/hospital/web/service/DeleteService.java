package com.hospital.web.service;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface DeleteService {
	public int execute(Object o) throws Exception;
}
