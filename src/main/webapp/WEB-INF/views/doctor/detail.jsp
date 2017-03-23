<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/header.jsp"/>
<jsp:include page="../common/gnb.jsp"/>
<h1>의사 페이지 샘플 확인</h1>
<div>
	<div style="margin-top: 100px;">
		<table class="detail_back">
			<tr>
				<th colspan="4"><a href="${context.path}/patient?action=mypage&page=detail" class="detail_a">마이페이지로 돌아가기</a></th>
			</tr>
		</table>
	</div>
	<div style="margin-top: 20px;">
		<table class="detail_table">
			<tr>
				<td rowspan="4"><img src="${context.img}/common/default_pic.jpg" alt="기본 사진" width="200px" height="200px"/></td>
				<td class="detail_table_col"><span>의사 아이디</span></td>
				<td><span>${doctor.docID}</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>진료과</span></td>
				<td><span>${doctor.majorTreat}</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>성별</span></td>
				<td><span>${doctor.docGen}</span></td>
			</tr>
			<tr>
				<td class="detail_table_col"><span>전화번호</span></td>
				<td><span>${doctor.docPhone}</span></td>
			</tr>
			<tr>
				<td rowspan="2">${doctor.docName} ${doctor.docPosition}</td>
				<td class="detail_table_col"><span>이메일</span></td>
				<td><span>${doctor.docEmail}</span></td>
			</tr>
		</table>
	<div style="padding-top: 20px;">
	</div>
		<table class="detail_table2">
			<tr>
				<td><span class="detail_span"><a href="">담당환자</a></span></td>
				<td><span class="detail_span"><a href="">담당차트</a></span></td>
				<td><span class="detail_span"><a href="">담당진료</a></span></td>
			</tr>
		</table>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>