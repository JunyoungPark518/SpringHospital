package com.hospital.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class AdminDTO {
	@Getter @Setter
	private String adminID, admPass, admName, admGen, admPhone, admEmail, admPermission;
}
