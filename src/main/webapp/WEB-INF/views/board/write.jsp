<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<jsp:include page="gnb.jsp"/>
<div style="position: relative; top: 150px">
<div id="container">
	<div>
		<table class="bbs_one">
			<tr>
			<td style="width:40px">제목</td>
				<td><input type="text" name="title" style="width:160px"></td>
				<td style="width:200px"><b style="margin-left: 1px solid black;">자유 게시판</b></td>
			</tr>
			<tr>
				<td colspan="2">작성자: </td>
				<td>주소부분</td>
			</tr>
			<tr>
				<td colspan="3"><span style="margin-top:10px; margin-bottom:10px">
				<input type="text" name="content" style="height: 300px; width: 600px"/>
				</span></td>
			</tr>
		</table>
	</div>
	<div style="margin-top:30px; text-align:right">
		<table style="width:60%; margin: 0 auto">
			<tr>
			<td><a href=""><input  type="submit" name="change" value="등록하기"/></a>
			<a href=""><input type="button" name="delete" value="다시 쓰기"/></a>
			</td>
				<td style="text-align:right; width:400px">
					<a href="${context.path}/board.do?action=list&page=articleList&pageNo=1"><input type="button" value="뒤로가기"/></a>
				</td>
			</tr>
		</table>
	</div>
	</div>
</div>
