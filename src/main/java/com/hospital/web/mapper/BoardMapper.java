package com.hospital.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hospital.web.domain.ArticleDTO;
import com.hospital.web.imapper.IBoardMapper;

@Repository
public class BoardMapper implements IBoardMapper {

	@Override
	public int insert(ArticleDTO article) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public ArticleDTO selectBySeq(ArticleDTO article) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDTO> selectByWord(ArticleDTO article) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDTO> selectAll(int[] pageArr) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int update(ArticleDTO article) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(ArticleDTO article) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int count() {
		// TODO Auto-generated method stub
		return 0;
	}

}
