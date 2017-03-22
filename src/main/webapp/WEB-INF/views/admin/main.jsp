<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="../../css/hanbit.css" />
<meta charset="UTF-8">
<title>관리자 페이지</title>
</head>
<body>
	<div id="wrapper" class="width100" style="height: 80px; border-top: 2px solid darkgray;">
		<div id="header" class="wtac" style="height: 100px;">
			<table style="margin: 0 auto; width: 1000px;">
				<tr>
					<td style="width: 230px;"><a href="../../index.html"><img
							src="../../images/common/logo.png" alt="병원 로고" width="200px"
							height="75px" /></a></td>
					<td class="index_main"><span class="index_mainlogo"><b>한빛병원</b></span></td>
					<td><input class="index_search" type="search" name="search"
						placeholder="검색어를 입력해주세요" /> <a class="index_search_btn1" href="">검색</a>
					</td>
				</tr>
			</table>
			<div class="index_gnbtab">
			<ul class="index_gnb">
				<li>
					<div class="index_gnb_dropdown">
					<a class="index_gnb_index" href="../common/intro.html">병원소개</a>
						<div class="index_gnb_dropdown_content">
						<table class="index_gnb_ddltable">
							<tr><td><a href=""><span class="index_gnb_ddl">병원소개</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">병원소식</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">병원장인사말</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">병원조직</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">웹링크</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">매거진</span></a></td></tr>
						</table>
						</div>
					</div>
				</li>
				<li>
					<div class="index_gnb_dropdown">
					<a class="index_gnb_index" href="../common/usage.html">이용안내</a>
						<div class="index_gnb_dropdown_content">
						<table class="index_gnb_ddltable">
							<tr><td><a href=""><span class="index_gnb_ddl">오시는 길</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">주차/편의시설</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">가정간호</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">문병안내</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">신청/발급안내</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">장례식장</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">FAQ</span></a></td></tr>
						</table>
						</div>
					</div>
				</li>
				<li>
					<div class="index_gnb_dropdown">
					<a class="index_gnb_index" href="../common/treat.html">진료안내</a>
						<div class="index_gnb_dropdown_content">
						<table class="index_gnb_ddltable">
							<tr><td><a href=""><span class="index_gnb_ddl">진료안내</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">입/퇴원안내</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">진료과/의료진</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">인터넷 진료예약</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">응급의료센터</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">건강검진</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">FAQ</span></a></td></tr>
						</table>
						</div>
					</div>
				</li>
				<li>
					<div class="index_gnb_dropdown">
					<a class="index_gnb_index" href="../common/info.html">의학정보실</a>
						<div class="index_gnb_dropdown_content">
						<table class="index_gnb_ddltable">
							<tr><td><a href=""><span class="index_gnb_ddl">자가진단서비스</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">의학백과사전</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">종합질병정보</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">의료기기정보</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">건강FAQ</span></a></td></tr>
						</table>
						</div>
					</div>
				</li>
				<li>
					<div class="index_gnb_dropdown">
					<a class="index_gnb_index" href="../common/customer.html">고객참여마당</a>
						<div class="index_gnb_dropdown_content">
						<table class="index_gnb_ddltable">
							<tr><td><a href=""><span class="index_gnb_ddl">고객의 소리</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">서비스 현장</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">자원봉사센터</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">정보공개제도안내</span></a></td></tr>
							<tr><td><a href=""><span class="index_gnb_ddl">사업실명제</span></a></td></tr>
						</table>
						</div>
					</div>
				</li>
			</ul>
			</div>
		</div>
		<div style="height: 150px;"></div>
		<!-- 여기까지 코드 복사&붙여넣기 -->
		<div id="container">
	<div><table class="list_subject">
		<tr>
			<td><span>현 황</span></td>
		</tr>
	</table>
	</div>
	<div style="margin-top: 20px;">
		<table class="list_table">
			<tr>
			<td style="vertical-align: top;">
				<div class="list_dropdown">
					<a href=""><span class="list_ddlmain">의사</span></a>
					<div class="list_dropdown_content">
						<a href=""><span class="list_ddl">의사</span></a>
						<a href=""><span class="list_ddl">간호사</span></a>
						<a href=""><span class="list_ddl">환자</span></a>
						<a href=""><span class="list_ddl">차트</span></a>
					</div>
				</div>
			</td>
			<td colspan="5">
				<div style="padding: 50px 0px; text-align: center;">
					<table class="list_table_even">
						<tr>
							<th><span class="list_span_header">순서</span></th>
							<th><span class="list_span_header">번호</span></th>
							<th><span class="list_span_header">이름</span></th>
							<th><span class="list_span_header">진료과</span></th>
							<th><span class="list_span_header">성별</span></th>
							<th><span class="list_span_header">전화번호</span></th>
							<th><span class="list_span_header">이메일</span></th>
							<th><span class="list_span_header">직위</span></th>
						</tr>
						<tr>
							<td><span class="list_span_content">1</span></td>
							<td><span class="list_span_content">980312</span></td>
							<td><span class="list_span_content">이태정</span></td>
							<td><span class="list_span_content">소아과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">010-333-1340</span></td>
							<td><span class="list_span_content">ltj@hanbh.com</span></td>
							<td><span class="list_span_content">과장</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">2</span></td>
							<td><span class="list_span_content">000601</span></td>
							<td><span class="list_span_content"><a href="../staff/staff_detail.html">안성기</a></span></td>
							<td><span class="list_span_content">내과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">011-222-0987</span></td>
							<td><span class="list_span_content">ask@hanbh.com</span></td>
							<td><span class="list_span_content">과장</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">3</span></td>
							<td><span class="list_span_content">001208</span></td>
							<td><span class="list_span_content">김민종</span></td>
							<td><span class="list_span_content">외과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">010-333-8743</span></td>
							<td><span class="list_span_content">kmj@hanbh.com</span></td>
							<td><span class="list_span_content">과장</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">4</span></td>
							<td><span class="list_span_content">020403</span></td>
							<td><span class="list_span_content">이태서</span></td>
							<td><span class="list_span_content">피부과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">019-777-3764</span></td>
							<td><span class="list_span_content">lts@hanbh.com</span></td>
							<td><span class="list_span_content">과장</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">5</span></td>
							<td><span class="list_span_content">050900</span></td>
							<td><span class="list_span_content">김연아</span></td>
							<td><span class="list_span_content">소아과</span></td>
							<td><span class="list_span_content">여자</span></td>
							<td><span class="list_span_content">010-555-3746</span></td>
							<td><span class="list_span_content">kya@hanbh.com</span></td>
							<td><span class="list_span_content">전문의</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">6</span></td>
							<td><span class="list_span_content">050101</span></td>
							<td><span class="list_span_content">차태현</span></td>
							<td><span class="list_span_content">내과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">011-222-7643</span></td>
							<td><span class="list_span_content">cth@hanbh.com</span></td>
							<td><span class="list_span_content">전문의</span></td>
						</tr>
						<tr>
							<td><span class="list_span_content">7</span></td>
							<td><span class="list_span_content">050101</span></td>
							<td><span class="list_span_content">차태현</span></td>
							<td><span class="list_span_content">내과</span></td>
							<td><span class="list_span_content">남자</span></td>
							<td><span class="list_span_content">011-222-7643</span></td>
							<td><span class="list_span_content">cth@hanbh.com</span></td>
							<td><span class="list_span_content">전문의</span></td>
						</tr>
					</table>
				</div>
			</td>
			</tr>
		</table>
	</div>
	<!-- 여기까지 코드 복사&붙여넣기 -->
	</div>
	<div style="height: 200px;"></div>
		<div id="footer" class="width100">
			<table class="policy">
				<tr>
					<td><a href="http://www.navercorp.com/" target="_blank"	id="plc.intronhn">병원소개</a></td>
					<td><a href="http://mktg.naver.com/" id="plc.adinfo">광고</a></td>
					<td><a href="https://submit.naver.com/" id="plc.search">마이비즈니스</a></td>
					<td><a href="https://www.navercorp.com/ko/company/proposalGuide.nhn" target="_blank" id="plc.contact">제휴제안</a></td>
					<td><a href="rules/service.html" id="plc.service">이용약관</a></td>
					<td><a href="rules/privacy.html" id="plc.privacy"><strong>개인정보처리방침</strong></a></td>
					<td><a href="rules/youthpolicy.html" id="plc.youth">청소년보호정책</a></td>
					<td><a href="rules/spamcheck.html" id="plc.policy">한빛병원 정책</a></td>
					<td><a href="https://help.naver.com/" id="plc.helpcenter">한빛병원 고객센터</a></td>
				</tr>
			</table>
		</div>
	</div>

</body>
</html>