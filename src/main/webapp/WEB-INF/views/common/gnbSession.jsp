<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="index_gnbtab wtac" style="position: relative; top: 125px;">
<ul class="index_gnb">
	<li><a class="index_gnb_index" href="${context.path}/patient.do?action=move&page=main">홈으로</a></li>
	<li><a class="index_gnb_index" href="${context.path}/patient.do?action=mypage&page=detail">MY PAGE</a></li>
	<li><a class="index_gnb_index" href="${context.path}/patient.do?action=move&page=treatmentList">나의 진료기록</a></li>
	<li><a class="index_gnb_index" href="${context.path}/board.do?action=move&page=main">게시판</a></li>
	<li><a class="index_gnb_index" href="html/common/customer.html">고객참여마당</a></li>
	<li><a class="index_gnb_index" href="${context.path}/home.do?action=logout&page=main">로그아웃</a></li>
</ul>
</div>