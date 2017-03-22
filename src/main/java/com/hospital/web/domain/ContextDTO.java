package com.hospital.web.domain;

import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data
public class ContextDTO {
	@Getter @Setter
	private String path, js, css, img;
}
