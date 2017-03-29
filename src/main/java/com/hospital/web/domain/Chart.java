package com.hospital.web.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class Chart {
	private String chartID, treatID, docID, nurID, patID, chartContent;
}
