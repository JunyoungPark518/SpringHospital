package com.hospital.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.*;

@Component @Data @Lazy
public class Chart {
	private String patientId, nurseId, doctorId, name, pass, gen, jumin, addr, phone, email, job, chartId, treatmentId, chartContents, doctorMajor, doctorName, doctorPosition, nurseName, nursePosition, treatContents, treatDate;
}
