package com.hospital.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data @Lazy
public class Article {
	private String seq, writer_id, title, content, reg_date, read_count;
}
