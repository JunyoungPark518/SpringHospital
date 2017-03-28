package com.hospital.web.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class Article {
	@Getter @Setter
	private String seq, id, title, content, regdate, readCount;
	@Override
	public String toString() {
		return String.format("[%s | %s | %s | %s | %s]\n", seq, id, title, regdate, "0");
	}
}
