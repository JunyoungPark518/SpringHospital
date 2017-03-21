package com.hospital.domain;

import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data
public class DoctorDTO {
	@Getter @Setter
	private String docID, docPass, majorTreat, docName, docGen, docPhone, docEmail, docPosition;
}
