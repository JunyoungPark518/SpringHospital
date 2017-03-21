package com.hospital.daoImpl;

import org.springframework.stereotype.Repository;
import com.hospital.dao.DoctorDAO;
import com.hospital.domain.DoctorDTO;

@Repository
public class DoctorDAOImpl implements DoctorDAO {

	@Override
	public int insert(DoctorDTO member) throws Exception {
		return 0;
	}

	@Override
	public DoctorDTO selectById(DoctorDTO member) throws Exception {
		String sql = String.format("SELECT %s FROM Doctor WHERE doc_id='%s' OR doc_name='%s'", "");
//				prop, member.getDocID(), member.getDocName());
		return null;
	}

	@Override
	public int update(DoctorDTO member) throws Exception {
		return 0;
	}

	@Override
	public int delete(DoctorDTO member) throws Exception {
		return 0;
	}

}
