package com.hospital.web.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.web.dao.BoardDAO;
import com.hospital.web.domain.ArticleDTO;
import com.hospital.web.service.IBoardService;

@Service
public class BoardService implements IBoardService {
	@Autowired BoardDAO dao;
	@Override
	public int addArticle(ArticleDTO param) throws Exception{
		return dao.insert(param);
	}

	@Override
	public ArticleDTO findOne(ArticleDTO param) throws Exception {
		return null;
	}

	@Override
	public List<ArticleDTO> findSome(ArticleDTO param) throws Exception {
		return null;
	}

	@Override
	public List<ArticleDTO> list(int[] pageArr) {
		return null;
	}

	@Override
	public int update(ArticleDTO param) throws Exception {
		return dao.update(param);
	}

	@Override
	public int delete(ArticleDTO param) throws Exception {
		return dao.delete(param);
	}

	@Override
	public int count() {
		return dao.count();
	}

}
