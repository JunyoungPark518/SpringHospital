package com.hospital.web.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class Nurse {
	@Getter @Setter
	private String nurID, nurPass, majorJob, nurName, nurGen, nurPhone, nurEmail, nurPosition;
}
