package com.hospital.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class PatientDTO {
	@Getter	@Setter
	private String patID, nurID, docID, patPass, patName, patGen, patJumin, patAddr, patPhone, patEmail, patJob;
}
