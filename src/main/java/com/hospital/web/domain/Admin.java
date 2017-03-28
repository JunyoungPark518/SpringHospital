package com.hospital.web.domain;

import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data
public class Admin {
	@Getter @Setter
	private String adminID, admPass, admName, admGen, admPhone, admEmail, admPermission;
}
