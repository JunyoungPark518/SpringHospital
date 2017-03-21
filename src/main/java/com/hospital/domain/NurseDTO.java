package com.hospital.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class NurseDTO {
	@Getter @Setter
	private String nurID, nurPass, majorJob, nurName, nurGen, nurPhone, nurEmail, nurPosition;
}
