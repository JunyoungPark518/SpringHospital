package com.hospital.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.hospital.web.domain.Patient;

@Service
public class Util {
	public static String[] defineInfo(Patient member) {
		String[] arr = new String[3];
		boolean flag = member.getJumin().charAt(7)=='3' || member.getJumin().charAt(7)=='4';
		arr[0] = flag ? "20" + member.getJumin().substring(0, 2) + "�� " + member.getJumin().substring(2, 4) + "�� " + member.getJumin().substring(4, 6) + "��" : "19" + member.getJumin().substring(0, 2) + "�� " + member.getJumin().substring(2, 4) + "�� " + member.getJumin().substring(4, 6) + "��";
		arr[1] = flag ? String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 2000 - Integer.parseInt(member.getJumin().substring(0,2))) + "��" : String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 1900 - Integer.parseInt(member.getJumin().substring(0,2))) + "��";
		arr[2] = member.getGen().equals("M") ? "����" : "����";
		return arr;
	}
}
