<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/top.jsp"/>
<jsp:include page="../common/header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div style="position: relative; top: 150px">
<div id="container">
	<div>
		<table id="contents">
			<tr>
				<td style="width:40px">제목</td>
				<td><input type="text" name="title"/></td>
				<td><b>자유 게시판</b></td>
			</tr>
			<tr>
				<td>작성자: ${requestScope.art.id}</td>
				<td>주소부분</td>
			</tr>
			<tr>
				<td>
					<span>
						<input type="text" name="content"/>
					</span>
				</td>
			</tr>
		</table>
	</div>
	<div>
		<table id="submit">
			<tr>
				<td>
					<a href="${context.path}/board.do?action=change&page=articleList"><input type="submit" name="change" value="수정 완료"/></a>
					<a href="${context.path}/board.do?action=delete&page=articleList"><input type="button" name="delete" value="게시글 삭제"/></a>
				</td>
				<td>
					<a href="${context.path}/board.do?action=list&page=articleList"><input type="button" value="목록으로"/></a>
				</td>
			</tr>
		</table>
	</div>
</div>
</div>
<script>
$(function(){
	var con = $('#container');
	var tab1 = $('#contents');
	tab1.addClass('bbs_one');
	tab1.find('input[name=title]').attr('value','${requestScope.art.title}').css('width','160px');
	var td1 = tab1.find('tr:nth-child(1)>td:nth-child(3)');
	td1.css('width','200px');
	td1.find('b').css('margin-left','1px solid black');
	tab1.find('tr:nth-child(2)>td:nth-child(1)').attr('colspan','2');
	tab1.find('tr:nth-child(3)>td').attr('colspan','3');
	tab1.find('tr:nth-child(3) span').css('margin-top','10px').css('margin-bottom','10px');
	tab1.find('tr:nth-child(3) input').attr('value','${requestScope.art.content}').css('height','300px').css('width','600px');
	con.find('div:nth-child(2)').css('margin-top','30px').css('text-align','right');
	var tab2 = $('submit');
	tab2.css('width','60%').css('margin','0 auto').css('text-align','center');
	tab2.find('td:nth-child(2)').css('text-align','center').css('width','400px');
});
</script>
