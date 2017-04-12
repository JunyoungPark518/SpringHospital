package com.hospital.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Admin extends Info {
	private String permission;
	@Override
	public String getGroup() {
		return "Admin";
	}
}
