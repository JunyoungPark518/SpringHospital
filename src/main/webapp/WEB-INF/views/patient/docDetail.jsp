<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div>
	<div style="margin-top: 100px;">
		<table class="detail_back">
			<tr>
				<th colspan="4"><a href="${context}/patient?action=mypage&page=detail" class="detail_a">마이페이지로 돌아가기</a></th>
			</tr>
		</table>
	</div>
	<div style="margin-top: 20px;">
		<table class="detail_table">
			<tr>
				<td rowspan="4"><img src="${context}/resources/img/common/default_pic.jpg" alt="기본 사진" width="200px" height="200px"/></td>
				<td class="detail_table_col"><span>의사 아이디</span></td>
				<td><span>채워야댐</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>진료과</span></td>
				<td><span>채워야댐</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>성별</span></td>
				<td><span>채워야댐</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>전화번호</span></td>
				<td><span>채워야댐</span></td>
			</tr>
			<tr>
				<td rowspan="2">채워야댐 채워야댐</td>
				<td class="detail_table_col"><span>이메일</span></td>
				<td><span>채워야댐</span></td>
			</tr>
		</table>
	<div style="padding-top: 20px;">
</div>
<jsp:include page="../common/footer.jsp"/>