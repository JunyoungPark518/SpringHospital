<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div style="position: relative; top: 150px">
<div id="container">
	<div></div>
	<div>
		<table id="articleList">
			<tr>
				<th>총 게시글 수: ${requestScope.count} 건</th>
			</tr>
			<tr>
				<th><span>No</span></th>
				<th><span>제목</span></th>
				<th><span>작성자</span></th>
				<th><span>작성일</span></th>
				<th><span>조회수</span></th>
			</tr>
			<c:forEach var="article" items="${requestScope.list}" >
				<tr>
					<td><span>${article.seq}</span></td>
					<td><span><a id="link" href="${context.path}/board.do?action=detail&page=article&seq=${article.seq}">${article.title}</a></span></td>
					<td><span>${article.id}</span></td>
					<td><span>${article.regdate}</span></td>
					<td><span>${article.readCount}</span></td>
				</tr>
			</c:forEach>
			<%-- <tr>
				<td colspan="5">
				<c:forEach var="pageNo" items="${requestScope.block}">
					<span style="font-size: 15px"><a href="articleList.jsp?">${pageNo}</a></span>&nbsp;&nbsp;&nbsp;
				</c:forEach> 
				</td>
			</tr> --%>
		</table>
		<div id="pagination">
		<table id="tab_page">
			<tr>
			<td>
			<c:if test="${requestScope.prevBlock gt 0}">
				<a href="${context.path}/board.do?action=list&page=articleList&pageNo=${requestScope.prevBlock}">◀PREV</a>
			</c:if>
			<c:forEach varStatus="i" begin="${requestScope.blockStart}" end="${requestScope.blockEnd}" step="1">
				
				<c:choose>
					<c:when test="${i.index eq pageNo}">
						<a href="#"><font>${i.index}</font></a>
					</c:when>
					<c:otherwise>
						<span><a href="${context.path}/board.do?action=list&page=articleList&pageNo=${i.index}">${i.index}</a></span>
					</c:otherwise>
				</c:choose>
				
			</c:forEach> 
			<c:if test="${requestScope.nextBlock le pageCount}">
				<a href="${context.path}/board.do?action=list&page=articleList&pageNo=${requestScope.nextBlock}">NEXT▶</a>
			</c:if>
			</td>
			</tr>
		</table>
		</div>
	</div>
	<div>
		<form action="">
			<table style="width:800px; margin: 0 auto">
			<tr>
				<td style="text-align:left; width:100px">
				<a href="${context.path}/board.do?action=write&page=write"><input type="button" value="글 작성"/>
				</a>
				</td>
				<td style="text-align:right; width:300px">
					<select name="finding">
						<option value="userid">작성자</option>
						<option value="title">제목</option>
						<option value="content">내용</option>
						<option value="regdate">날짜</option>
					</select>
				<input type="text" name="search"/>
				<input type="submit" value="검색"/>
				</td>
			</tr>
			</table>
		</form>
	</div>
</div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
$(function(){
	var con = $('#container');
	con.find('div:nth-child(1)').css('margin-top','50px');
	con.find('div:nth-child(3)').css('margin-top','30px').css('margin-bottom','200px').css('text-align','right');
	var tab = $('#articleList');
	tab.addClass('bbs_table');
	tab.find('tr:nth-child(1) th').attr('colspan','5');
	tab.find('tr:nth-child(2)').find('th:nth-child(1)').css('width','50px');
	tab.find('tr:nth-child(2)').find('th:nth-child(2)').css('width','200px');
	tab.find('tr:nth-child(2)').find('th:nth-child(3)').css('width','100px');
	tab.find('tr:nth-child(2)').find('th:nth-child(4)').css('width','100px');
	tab.find('tr:nth-child(2)').find('th:nth-child(5)').css('width','50px');
	var page = $('pagination');
	page.addClass('wtac');
	var tbpage = $('#tab_page')
	tbpage.addClass('bbs_page').css('margin','0 auto');
	tbpage.find('font').css('color','white').css('font-size','12px').css('padding','2px').css('background-color','#444444');
	tbpage.find('span').css('font-size','15px');
	$('#link').click(function() {
		goPage(context + 'board.do', 'detail', 'article');
		alert('이동');
	})
});
</script>