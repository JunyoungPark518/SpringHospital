<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="index_gnbtab wtac" style="position: relative; top: 125px;">
<ul class="index_gnb">
	<li>
		<a class="index_gnb_index" href="${context.path}/board.do?action=move&page=notice">공지사항</a>
	</li>
	<li>
		<a class="index_gnb_index" href="${context.path}/board.do?action=move&page=detail">내가 작성한 글</a>
	</li>
	<li>
		<a class="index_gnb_index" href="${context.path}/board.do?action=write&page=write">게시글 작성</a>
	</li>
	<li>
		<a class="index_gnb_index" href="${context.path}/board.do?action=move&page=main">게시판 메인</a>
	</li>
	<li>
		<a class="index_gnb_index" href="${context.path}/patient.do?action=move&page=main">나의 페이지로</a>
	</li>
	<li>
		<a class="index_gnb_index" href="${context.path}/home.do?action=logout&page=main">로그아웃</a>
	</li>
</ul>
</div>