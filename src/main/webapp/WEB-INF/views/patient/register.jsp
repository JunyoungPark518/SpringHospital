<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/top.jsp"/>
<jsp:include page="../common/header.jsp"/>
<jsp:include page="../common/gnb.jsp"/>
<div style="height: 150px;"> </div>
<div id="container">
		<div style="width: 100%;">
		<form id="registerForm">
		<table class="reg_intro">
			<tr>
				<th colspan="2"><span class="reg_introtext">회원 가입</span></th>
			</tr>
			<tr>
				<td class="reg_active"><span>STEP 01</span><br/><b style="font-size: 16px;">약관 / 정보입력</b></td>
				<td class="reg_inactive"><span>STEP 02</span><br/><b style="font-size: 16px;">가입완료</b></td>
			</tr>
		</table>
		<div style="margin-top: 20px;"></div>
		<table class="reg_table">
			<tr style="height: 50px">
				<td colspan="2">
					<span class="reg_span">담당 의료진을 선택해주세요.</span><br />
					<select name="doctor">
						<option value="" selected>의사선택</option>
						<option value="dlee">소아과 - 이태정</option>
						<option value="dahn">내과 - 안성기</option>
						<option value="dkim">외과 - 김민종</option>
						<option value="dlee2">피부과 - 이태서</option>
						<option value="dkim2">소아과 - 김연아</option>
					</select> 
					<select name="nurse">
						<option value="" selected>간호사선택</option>
						<option value="nkim">소아과 - 김은영</option>
						<option value="nyoon">내과 - 윤성애</option>
						<option value="nshin">피부과 - 신지원</option>
						<option value="nyou">방사선과 - 유정화</option>
						<option value="nla">내과 - 라하나</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2"><input type="text" name="username"/> 
				<br/><span class="reg_span">이름을 입력해주세요.</span>
				</td>
			</tr>
			<tr>
				<td colspan="2"><input type="text" name="userid"/> 
				<br/><span class="reg_span">한글 또는 영문으로 입력해주세요.</span>
				</td>
			</tr>
			<tr>
				<td colspan="2"><input type="email" name="email"/> 
				<input type="button" value="중복확인" /><br/>
				<span class="reg_span">자주 사용하시는 이메일주소로 입력해주세요.</span></td>
			</tr>
			<tr>
				<td colspan="2"><input type="password" name="password"/><br/>
				<span class="reg_span">8~15자의 영문자, 숫자, 특수문자를 함께 입력해주세요.</span></td>
			</tr>
			<tr>
				<td colspan="2"><input type="password" name="repassword"/><br />　</td>
			</tr>
			<tr>
				<td colspan="2"><input type="text" name="address"/><br/>
				<span class="reg_span">'시 군/구 동'까지만 입력해주세요.</span></td>
			</tr>
			<tr>
				<td colspan="2">
					<select name="birthy">
						<option value="" selected>생년</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
						<option value="2014">2014</option>
						<option value="2013">2013</option>
						<option value="2012">2012</option>
						<option value="2011">2011</option>
						<option value="2010">2010</option>
						<option value="2009">2009</option>
						<option value="2008">2008</option>
						<option value="2007">2007</option>
						<option value="2006">2006</option>
					</select> 
					<select name="birthm">
						<option value="" selected>월</option>
						<option value="01">1월</option>
						<option value="02">2월</option>
						<option value="03">3월</option>
						<option value="04">4월</option>
						<option value="05">5월</option>
						<option value="06">6월</option>
						<option value="07">7월</option>
						<option value="08">8월</option>
						<option value="09">9월</option>
						<option value="10">10월</option>
						<option value="11">11월</option>
						<option value="12">12월</option>
					</select> 
					<select name="birthd">
						<option value="" selected>일</option>
						<option value="01">1일</option>
						<option value="02">2일</option>
						<option value="03">3일</option>
						<option value="04">4일</option>
						<option value="05">5일</option>
						<option value="06">6일</option>
						<option value="07">7일</option>
						<option value="08">8일</option>
						<option value="09">9일</option>
						<option value="10">10일</option>
						<option value="11">11일</option>
						<option value="12">12일</option>
						<option value="13">13일</option>
						<option value="14">14일</option>
						<option value="15">15일</option>
						<option value="16">16일</option>
						<option value="17">17일</option>
						<option value="18">18일</option>
						<option value="19">19일</option>
						<option value="20">20일</option>
						<option value="21">21일</option>
						<option value="22">22일</option>
						<option value="23">23일</option>
						<option value="24">24일</option>
						<option value="25">25일</option>
						<option value="26">26일</option>
						<option value="27">27일</option>
						<option value="28">28일</option>
						<option value="29">29일</option>
						<option value="30">30일</option>
						<option value="31">31일</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<select name="telecom">
						<option value="" selected>통신사</option>
						<option value="skt">SKT</option>
						<option value="kt">KT</option>
						<option value="lg">LG</option>
					</select> 
					<select name="phoneFirst">
						<option value="010">010</option>
						<option value="011">011</option>
						<option value="017">017</option>
						<option value="018">018</option>
						<option value="019">019</option>
					</select> - <input type="text" name="phoneMid">
					- <input type="text" name="phoneLast">
				</td>
			</tr>
		</table>
		<table class="reg_table">
			<tr style="font-size: 12px;">
				<td class="reg_borderNoneWidth120"><b>정보수신 동의</b></td>
				<td style="text-align: right; border: none;"><b>전체선택</b> 
					<input type="checkbox" name="selectall" value="All" /></td>
			</tr>
			<tr style="font-size: 12px;">
				<td class="reg_borderNoneWidth120"><b>직업</b></td>
				<td style="border: none;">
					<input type="checkbox" name="job" value="employee" />회사원
					<input type="checkbox" name="job" value="developer" />개발자
					<input type="checkbox" name="job" value="staff" />스텝
			</tr>
			<tr style="font-size: 12px;">
				<td class="reg_borderR"></td>
				<td style="border: none;">
					<input type="checkbox" name="job" value="doctor" />의사
					<input type="checkbox" name="job" value="nurse" />간호사
					<input type="checkbox" name="job" value="admin" />관리자
					</td>
			</tr>
			<tr>
				<td colspan="2" class="reg_borderNone"><span class="reg_span2">*
						정보수신동의를 하시면, 고객혜택 및 이벤트 등 다양한 정보를 받으실 수 있습니다</span></td>
			</tr>
		</table>
		<table class="reg_table">
			<tr style="font-size: 12px;">
				<td width="100px" class="reg_borderR">성별</td>
				<td class="reg_borderNone">
				<input type="radio" name="rdBtn" value="M">남
				<input type="radio"	name="rdBtn" value="F" />여
			</tr>
			<tr>
				<td colspan="2" class="reg_borderNone"><span class="reg_span2">*
						개인정보 유효기간 경과 이후 개인정보를 분리 저장관리 또는 파기합니다.</span></td>
			</tr>
		</table>
		<table class="reg_table">
			<tr>
				<td colspan="2" class="reg_borderNone"><span class="reg_span"><b>* 선택항목에
							동의하지 않으셔도 정상적인 서비스를 이용하실 수 있습니다.</b></span></td>
			</tr>
			<tr style="text-align: center; height: 100px;">
				<td colspan="2" class="reg_borderNone">
					<%-- <a href="${context.path}/home.do?action=move&page=main">
						<input type="button" value="이전">
					</a> &nbsp;&nbsp; --%>
					<input type="submit" value="다음">
				</td>
			</tr>
		</table>
		<input type="hidden" name="action" value="register"/>
		<input type="hidden" name="page" value="register2"/>
		</form>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>
<script>
$(function() {
	$('#container').css('margin-bottom','200px');
	var $reg = $('#registerForm');
	$reg.find('select[name=doctor]').css('width','200px');
	$reg.find('select[name=nurse]').css('width','200px');
	$reg.find('input[name=username]').attr('size','50').attr('placeholder','이름').css('border','none');
	$reg.find('input[name=userid]').attr('size','50').attr('placeholder','아이디').css('border','none');
	$reg.find('input[name=email]').attr('size','50').attr('placeholder','E-mail').css('border','none');
	$reg.find('input[value=중복확인]').addClass('reg_dupcheck');
	$reg.find('input[name=password]').attr('size','50').attr('placeholder','비밀번호').css('border','none');
	$reg.find('input[name=repassword]').attr('size','50').attr('placeholder','비밀번호 확인').css('border','none');
	$reg.find('input[name=address]').attr('size','50').attr('placeholder','주소(서울시 **구 **동)').css('border','none');
	$reg.find('select[name=birthy]').css('width','150px');
	$reg.find('select[name=birthm]').css('width','150px');
	$reg.find('select[name=birthd]').css('width','150px');
	$reg.find('select[name=telecom]').css('width','150px');
	$reg.find('select[name=phoneFirst]').css('width','80px');
	$reg.find('input[name=phoneMid]').css('width','80px');
	$reg.find('input[name=phoneLast]').css('width','80px');
	$reg.find('input[value=이전]').addClass('reg_btnBack');
	$reg.find('input[type=submit]').addClass('reg_btnCont');
	
	$('input[type=submit]').click(function() {
		$reg.attr('action', '${context.path}/patient.do');
		$reg.attr('method', 'post');
		$reg.submit();
	});
});
</script>