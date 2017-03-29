package com.hospital.web.domain;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;
import lombok.*;

@Data @Lazy @Qualifier("admin")
public class Admin extends Info {
	private String permission;
	@Override
	public String getGroup() {
		return "Admin";
	}
}
