package com.hospital.web.daoImpl;

import org.springframework.stereotype.Repository;

import com.hospital.web.dao.PatientDAO;
import com.hospital.web.domain.PatientDTO;

@Repository
public class PatientDAOImpl implements PatientDAO {

	@Override
	public int insert(PatientDTO member) throws Exception {
		return 0;
	}

	@Override
	public PatientDTO selectById(PatientDTO member) throws Exception {
		String sql = String.format("SELECT %s FROM Patient p, Doctor d WHERE pat_id='%s' AND p.doc_id=d.doc_id", "");
//				prop, member.getPatID());
		return null;
	}

	@Override
	public int update(PatientDTO member) throws Exception {
		return 0;
	}

	@Override
	public int delete(PatientDTO member) throws Exception {
		return 0;
	}

}
