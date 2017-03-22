package com.hospital.web.service;

import java.util.List;
import org.springframework.stereotype.Component;

import com.hospital.web.domain.ArticleDTO;

@Component
public interface BoardService {
		public int addArticle(ArticleDTO param) throws Exception;
		public ArticleDTO findOne(ArticleDTO param) throws Exception;
		public List<ArticleDTO> findSome(ArticleDTO param) throws Exception;
		public List<ArticleDTO> list(int[] pageArr);
		public int count();
		public int update(ArticleDTO param) throws Exception;
		public int delete(ArticleDTO param) throws Exception;
}
