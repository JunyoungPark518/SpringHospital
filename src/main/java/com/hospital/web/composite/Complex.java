package com.hospital.web.composite;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.hospital.web.domain.ContextDTO;

public class Complex {
	public static class ContextFactory {
		public static ContextDTO create() {
			ContextDTO context = new ContextDTO();
			String conPath = ((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes()).getRequest().getContextPath();
			context.setPath(conPath);
			context.setCss(conPath+"/resources/css");
			context.setImg(conPath+"/resources/img");
			context.setJs(conPath+"/resources/js");
			return context;
		}	
	}
	
}
