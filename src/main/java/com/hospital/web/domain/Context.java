package com.hospital.web.domain;

import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data
public class Context {
	@Getter @Setter
	private String path, js, css, img;
}
