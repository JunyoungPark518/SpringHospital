<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="con_setting" style="position: relative; top: 150px; text-align:center; width:100%">
	<div class="wtac">
		<table class="pat_detail">
		<tr style="text-align: left;">
				<td colspan="5"><div><img src="${context.img}/common/defaultimg.jpg" alt="" width="160px"/></div></td>
			</tr>
			<tr>
				<td style="width: 60px" rowspan="5"><span style="font-size: 20px">내<br />정<br />보</span></td>
				<td style="width: 100px; background-color: #bfcedd">이름</td>
				<td style="width: 150px">${user.patName}</td>
				<td style="width: 100px; background-color: #bfcedd">직업</td>
				<td style="width: 150px">${user.patJob}</td>
			</tr>
			<tr>
				<td style="background-color: #bfcedd;">생년월일</td>
				<td>${requestScope.birth}</td>
				<td style="background-color: #bfcedd;">키</td>
				<td>180cm</td>
			</tr>
			<tr>
				<td style="background-color: #bfcedd;">성별</td>
				<td>${requestScope.gender}</td>
				<td style="background-color: #bfcedd;">나이/몸무게</td>
				<td>${requestScope.age} / 70kg</td>
			</tr>
			<tr>
				<td style="background-color: #bfcedd;">전화번호</td>
				<td>${user.patPhone}</td>
				<td style="background-color: #bfcedd;">혈액형</td>
				<td>B</td>
			</tr>
			<tr>
				<td style="background-color: #bfcedd;">주소</td>
				<td>${user.patAddr}</td>
				<td style="background-color: #bfcedd;">주치의</td>
				<td><a onclick="docDetail()">${user.docID}</a></td>
			</tr>
		</table>
	</div>
</div>
<script>
	function docDetail() {
		alert('의사ID 클릭');
		location.href="${context}/doctor.do?action=move&page=detail&doc=${user.docID}";
	}
</script>
<jsp:include page="../common/footer.jsp"/>