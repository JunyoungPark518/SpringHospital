package com.hospital.web.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.hospital.web.domain.Patient;

@Service
public class Util {
	public static String[] defineInfo(Patient member) {
		String[] arr = new String[3];
		boolean flag = member.getPatJumin().charAt(7)=='3' || member.getPatJumin().charAt(7)=='4';
		arr[0] = flag ? "20" + member.getPatJumin().substring(0, 2) + "�� " + member.getPatJumin().substring(2, 4) + "�� " + member.getPatJumin().substring(4, 6) + "��" : "19" + member.getPatJumin().substring(0, 2) + "�� " + member.getPatJumin().substring(2, 4) + "�� " + member.getPatJumin().substring(4, 6) + "��";
		arr[1] = flag ? String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 2000 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "��" : String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date())) - 1900 - Integer.parseInt(member.getPatJumin().substring(0,2))) + "��";
		arr[2] = member.getPatGen().equals("M") ? "����" : "����";
		return arr;
	}
}
