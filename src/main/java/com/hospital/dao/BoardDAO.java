package com.hospital.dao;

import java.util.List;
import org.springframework.stereotype.Component;
import com.hospital.domain.ArticleDTO;

@Component
public interface BoardDAO {
	public int insert(ArticleDTO article) throws Exception;
	public ArticleDTO selectBySeq(ArticleDTO article) throws Exception;
	public List<ArticleDTO> selectByWord(ArticleDTO article) throws Exception;
	public List<ArticleDTO> selectAll(int[] pageArr);
	public int update(ArticleDTO article) throws Exception;
	public int delete(ArticleDTO article) throws Exception;
	public int count();
}
