package com.hospital.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class TreatmentDTO {
	@Getter @Setter
	private String treatId, patId, docId, treatContents, treatDate;
}
