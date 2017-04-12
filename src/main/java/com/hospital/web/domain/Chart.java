package com.hospital.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data @Lazy
public class Chart {
	private String chartID, treatID, docID, nurID, patID, chartContent;
}
