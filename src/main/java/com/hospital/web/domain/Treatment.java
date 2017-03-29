package com.hospital.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data @Lazy
public class Treatment extends Info {
	private String contents, date;
	private Patient patient;
	private Doctor doctor;
	@Override
	public String getGroup() {
		return "Treatment";
	}
}
