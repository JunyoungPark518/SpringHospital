package com.hospital.daoImpl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.hospital.dao.BoardDAO;
import com.hospital.domain.ArticleDTO;

@Repository
public class BoardDAOImpl implements BoardDAO {

	@Override
	public int insert(ArticleDTO article) throws Exception {
		String sql = String.format("INSERT INTO Article(art_seq, pat_id, title, content, regdate, read_count) "
						+ "VALUES (art_seq.nextval, '%s','%s','%s','%s','%s')", "");
//						article.getId(), article.getTitle(), article.getContent(), article.getRegdate(), article.getReadCount());
		return 0;
	}

	@Override
	public ArticleDTO selectBySeq(ArticleDTO article) throws Exception {
		String sql = String.format("SELECT * FROM Article WHERE art_seq='%d'", "");
//				Integer.parseInt(article.getSeq()));
		ArticleDTO temp = new ArticleDTO();
		return temp;
	}

	@Override
	public List<ArticleDTO> selectByWord(ArticleDTO article) throws Exception {
		String sql = String.format("SELECT * FROM Article WHERE pat_id like '%s'", "");
//				"%" + article.getId() + "%");
		List<ArticleDTO> list = new ArrayList<ArticleDTO>();
		return list;
	}
	
	@Override
	public List<ArticleDTO> selectAll(int[] pageArr) {
		String sql = String.format("SELECT t2.* FROM (SELECT ROWNUM seq,t.* FROM (SELECT * FROM Article ORDER BY art_seq DESC) t) t2 WHERE t2.seq BETWEEN %s AND %s", pageArr[0], pageArr[1]);
		List<ArticleDTO> list = new ArrayList<ArticleDTO>();
		return list;
	}
	
	@Override
	public int update(ArticleDTO article) throws Exception {
		String sql = String.format("UPDATE Article SET title='%s', content='%s', regdate='%s' WHERE art_seq='%d'", "");
//				!article.getTitle().equals(temp.getTitle()) && article.getTitle()!=null ? article.getTitle() : temp.getTitle(), 
//				!article.getContent().equals(temp.getContent()) && article.getContent()!=null ? article.getContent() : temp.getContent(), 
//				!article.getRegdate().equals(temp.getRegdate()) && article.getRegdate()!=null ? article.getRegdate() : temp.getRegdate(), 
//				Integer.parseInt(article.getSeq()));
		return 0;
	}

	@Override
	public int delete(ArticleDTO article) throws Exception {
		String sql = String.format("DELETE FROM Article WHERE art_seq='%d'", "");
//				Integer.parseInt(article.getSeq()));
		return 0;
	}

	@Override
	public int count(){
		String sql = "SELECT COUNT(*) AS COUNT FROM Article";
		return 0;
	}

}
