<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div style="position: relative; top: 150px">
<div id="container">
		<div>
			<table id="article">
				<tr>
					<td>${requestScope.art.title}</td>
					<td><b>자유 게시판</b></td>
					<td>${requestScope.art.regdate}</td>
				</tr>
				<tr>
					<td>${requestScope.art.id}</td>
					<td>주소부분</td>
				</tr>
				<tr>
					<td><span>${requestScope.art.content}</span></td>
				</tr>
				<tr>
					<td>조회수 ${requestScope.art.readCount}</td>
				</tr>
			</table>
		</div>
		<div>
			<form action="">
			<table>
				<tr>
					<td><input type="text" name="reply"/>
					
					<input type="submit" value="댓글등록"/>
					</td>
				</tr>
			</table>
			</form>
		</div>
		<div>
			<table>
				<tr>
					<td><a href="${context.path}/board?action=detail&page=articleChange&seq=${requestScope.art.seq}"><input type="button" value="게시글 수정"/></a>
					<input type="button" value="게시글 삭제"/></td>
					<td>
						<a href="${context.path}/board?action=list&page=articleList&pageNo=1"><input type="button" value="목록으로"/></a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
$(function(){
	var con = $('#container');
	var tab = $('#article');
	tab.addClass('bbs_one');
	tab.find('tr:nth-child(1)>td:nth-child(2)').css('width','400px');
	tab.find('tr:nth-child(1) b').css('margin-left','1px solid black');
	tab.find('tr:nth-child(1)>td:nth-child(3)').css('width','80px');
	tab.find('tr:nth-child(2)>td:nth-child(1)').attr('colspan','2');
	tab.find('tr:nth-child(3)>td').attr('colspan','3').css('height','150px');
	tab.find('tr:nth-child(3) span').css('margin-top','10px').css('margin-bottom','10px');
	tab.find('tr:nth-child(4)>td').attr('colspan','3');
	var div2 = con.find('div:nth-child(2)');
	div2.css('margin-top','30px').css('text-align','center');
	div2.find('table').css('width','60%').css('margin','0 auto');
	con.find('input[name=reply]').css('width','500px').css('height','100px');
	con.find('input[type=submit]').css('width','100px').css('height','100px');
	var div3 = con.find('div:nth-child(3)');
	div3.css('margin-top','30px').css('text-align','right');
	div3.find('table').css('width','60%').css('margin','0 auto');
	div3.find('table td:nth-child(2)').css('text-align','right').css('width','400px');
});
</script>