<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/top.jsp"/>
<jsp:include page="../common/header.jsp"/>
<jsp:include page="../common/gnb.jsp"/>
<div id="container" class="con_setting" style="position: relative; top:150px">
	<div>
		<table style="margin: 0 auto;">
			<tr>
				<td>
				<div>
				<form id="loginForm">
					<table class="login_table">
						<tr>
							<td><input type="text" name="id" placeholder="아이디" class="login_input" style="border-bottom: 1px solid #cccccc;" /></td>
							<td rowspan="2" class="login_btn">
							<input type="submit" value="로그인" class="login_input" style="width: 60px; height: 40px;" /></td>
						</tr>
						<tr>
							<td><input type="password" name="pw" placeholder="비밀번호"	class="login_input" /></td>
						</tr>
					</table>
				<input type="hidden" name="page" value="main"/>
				<input type="hidden" name="action" value="login"/>
				</form>
				</div>
				</td>
				<td style="width: 500px; text-align: right;">
					<div class="tooltip"><a href="#">병원소개</a><span class="tooltiptext">구현되지 않은 기능입니다.</span></div><br/>
				</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="saveid" value="save">
					<span class="login_span">로그인 상태 유지</span>&nbsp;&nbsp;&nbsp; 
					<a class="login_a" href="${context.path}/patient.do?action=move&page=register">회원가입</a>&nbsp; 
					<a class="login_a" href="${context.path}/patient.do?action=move&page=register">ID/PW 찾기</a></td>
				<td></td>
			</tr>
		</table>
	</div>
	<div style="margin-top: 50px;">
		<table class="index_menutb">
			<tr style="border-bottom: 2px solid gray; border-top: 2px solid gray;">
				<td><span>Hanbit Hospital Contents</span></td>
			</tr>
			<tr style="height: 720px;">
				<td>
				<div><iframe width="1080px" height="720px" src="https://www.youtube.com/embed/hTiJzzUWKWA?autoplay=1" ></iframe></div>
				</td>
			</tr>
			<tr style="border-top: 2px solid gray;">
				<td>
				<div class="index_mtb_contents">
					<ul>
						<li><a href=""><img src="${context.img}/common/index_icon01.png" alt="인터넷확인" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon02.png" alt="예약확인" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon03.png" alt="위임장/동의서" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon04.png" alt="진료안내" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon05.png" alt="의학백과사전" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon06.png" alt="홈페이지도우미" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon07.png" alt="병원로고" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon08.png" alt="찾아오시는길" /></a></li>
					</ul>
				</div>
				</td>
			</tr>
			<tr style="border-bottom: 2px solid gray;">
				<td>
				<div class="index_mtb_contents">
					<ul>
						<li><a href=""><img src="${context.img}/common/index_icon09.png" alt="인터넷확인" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon10.png" alt="예약확인" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon11.png" alt="위임장/동의서" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon12.png" alt="진료안내" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon13.png" alt="의학백과사전" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon14.png" alt="홈페이지도우미" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon15.png" alt="병원로고" /></a></li>
						<li><a href=""><img src="${context.img}/common/index_icon16.png" alt="찾아오시는길" /></a></li>
					</ul>
				</div>
				</td>
			</tr>
		</table>
	</div>
	<div style="margin-top: 50px;"></div>
	<div style="width: 100%; margin-bottom: 100px;">
		<table class="index_notice">
			<tr>
				<td style="width: 600px;">
				<div class="wtac">
					<table>
						<tr>
							<td>
							<div>
								<table class="index_nboard">
									<tr style="height: 30px;">
										<th><span>병원뉴스</span></th>
										<th><span>병원신문</span></th>
										<th><span>입찰공고</span></th>
										<th><span>채용공고</span></th>
										<th><span>강좌소식</span></th>
										<th><span>더보기</span></th>
									</tr>
									<tr style="height: 150px;">
										<td colspan="6">
											<a class="login_input text_no_underline" href="html/bbs/bbs_list.html">게시판 페이지로 가기</a>
										</td>
									</tr>
									<tr>
										<td colspan="3" style="margin-right: 5px;"><a href=""><img src="${context.img}/common/bbs_btn01.png" alt="" /></a></td>
										<td colspan="3"><a href=""><img src="${context.img}/common/bbs_btn02.png" alt="" /></a></td>
									</tr>
									<tr style="margin-top: 5px;">
										<td colspan="6"><a href=""><img src="${context.img}/common/bbs_btn03.png" alt="" /></a></td>
									</tr>
								</table>
							</div>
							</td>
						</tr>
					</table>
				</div>
				</td>
				<td>
				<div class="wtac">
					<table class="index_notice">
						<tr>
							<td>
							<div>
								<table class="index_nboard">
									<tr style="height: 20px;">
										<th><span>병원뉴스</span></th>
										<th><span>병원신문</span></th>
										<th><span>입찰공고</span></th>
										<th><span>채용공고</span></th>
										<th><span>강좌소식</span></th>
										<th><span>더보기</span></th>
									</tr>
									<tr>
										<td colspan="6">
										내용물
										</td>
									</tr>
								</table>
							</div>
							</td>
						</tr>
					</table>
				</div>
				</td>
			</tr>
		</table>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
$(function() {
	var loginForm = $('#loginForm');
	var tab = loginForm.find('table');
	$('#loginForm input[type=submit]').click(function() {
		loginForm.attr('action','${context}/patient.do');
		loginForm.attr('method','post');
		var idVal = tab.find('input[name=id]').val();
		var pwVal = tab.find('input[name=pw]').val();
		if(idVal=='' || pwVal=='') {
			alert('아이디 및 비밀번호를 입력해주세요.');
		} else {
			alert('로그인하기 위해 입력한 ID 값: '+idVal + '\n비밀번호:' + pwVal);
			loginForm.submit();
		}
	});
/* 	loginForm.find('input[type=submit]').submit(function(){
	}); */
});
</script>