/*
 ========= app-meta ========
 * app-algorithm
 * app-oop
 * app-bbs
 * app-component
 * app-ui
 * app-permission
 * app-navi
 * app-util
 * app-person
 * app-info
 *
 ===========================
 */

/* Application NameSpace */
var app = app || {};

		/************************
		 * Model
		 * app.context
		 * app.session
		 * app.util
		 * app.algorithm
		 * app.oop
		 ***********************/
/*========= app-context =========
	@AUTHOR : Junyoung Park
	@CREATE DATE : 2017-04-19
	@UPDATE DATE : 2017-04-19
	@DESC : META-INF
=================================*/
app.context = (function(){
	var init = function(context){ 
		app.session.init(context);
		onCreate();
	};
	var setContentView = function(){
		
	};
	var onCreate = function(){
		setContentView();
		app.component.init();
		app.algorithm.init();
		app.oop.init();
		app.bbs.init();
		app.person.init();
		app.util.datetime();
	};
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate
	};
})();
/*========= app-session =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Session
=================================*/
app.session = (function(){ 
	var init = function(context) { 
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath = function(){ return sessionStorage.getItem('context');};
	var getJavascriptPath = function(){ return sessionStorage.getItem('js');};
	var getStylePath = function() { return sessionStorage.getItem('css');};
	var getImagePath = function() { return sessionStorage.getItem('img');};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getStylePath : getStylePath,
		getImagePath : getImagePath
	};
})();
		/************************
		 * View
		 * app.component
		 * app.permission
		 * app.navi
		 * app.patient
		 ***********************/


/*========= app-algorithm =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Algorithm Implementation and Testing
	app-algorithm-series
		app-algorithm-aSeries
		app-algorithm-swSeries
		app-algorithm-dSeries
		app-algorithm-factorial
		app-algorithm-fibonacci
	app-algorithm-arr
		app-algorithm-selectSort
		app-algorithm-bubbleSort
		app-algorithm-insertSort
		app-algorithm-ranking
		app-algorithm-binary
		app-algorithm-merge
		app-algorithm-stack
		app-algorithm-randomGen
	app-algorithm-matrix
		app-algorithm-basic
		app-algorithm-zigzag
		app-algorithm-diamond
		app-algorithm-sandGlass
		app-algorithm-snail
		app-algorithm-magicSquare
	app-algorithm-math
		app-algorithm-determineprime
		app-algorithm-primeSum
		app-algorithm-primeCount
		app-algorithm-lcmGcm
		app-algorithm-euclid
		app-algorithm-factorization
		app-algorithm-primefactor
		app-algorithm-multiSum
		app-algorithm-approx
 *==========================*/
app.algorithm = (function(){
	/* 알고리즘수열 */
	var init = function() {
		onCreate();
	};
	var onCreate = function() {
		setContentView();
		series();
		arr();
		matrix();
		math();
		appl();
	};
	var setContentView = function(){};
		/* Algorithm DDL 수열 function */
	var aSeries = function(input) {
		var arr = input.split(",");
		var start = arr[0]*1, end = arr[1]*1, diff = arr[2]*1, sum = 0;
		var str = "";
		for(i=start; i<=end; i+=diff) {
			sum+=i;
			str+=i+((i+diff)>end?"=":"+");
		}
		return str+sum;
	};
	var swSeries = function(input) {
		var sum = 0;
		var sw = 1;
		for(i=1; i<=input; i++) {
			sum += sw * i;
			sw *= -1;
		}
		return sum;
	};
	var dSeries = function(input) {
		var sum = 0;
		var a = 1;
		for(i=0; i<=input; i++) {
			a += i;
			sum += a;
		}
		return sum;
	};
	var factorial = function(input) {
		var sum = 0;
		for(i=1; i<=input; i++) {
			var mul = 1;
			for(j=1; j<=i; j++) {
				mul *= j;
			}
			sum += mul; 
		}
		return sum;
	};
	var fibonacci = function(input) {
		var sum = 2;
		var a = 1;
		var b = 1;
		var c = 0;
		for(i=1; i<=input-2; i++) {
			c = a+b;
			sum += c;
			a = b;
			b = c;
		}
		return sum;
	};
		/* Algorithm DDL 배열 function */
	var selectSort = function(arr, cycle) {
		var temp = 0;
		for(i=0; i<cycle; i++) {
			for(j=i+1; j<6; j++) {
				if(arr[i]>arr[j]) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	};
	var bubbleSort = function(arr, cycle) {
		var temp = 0;
		for(i=0; i<cycle; i++) {
			for(j=0;j<5;j++){
				if(arr[i]>arr[i+1]){
					temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
			}
		}
		return arr;
	};
	var insertSort = function(arr, cycle) {
		var temp = 0;
		for (i=1; i<cycle; i++) {
			for (j=0; j<=i; j++) {
				if (arr[i] < arr[j]) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	};
	var ranking = function(arr){
		var rarr = [1, 1, 1, 1, 1, 1];
		for(i=0;i<6;i++){
			for(k=0;k<6;k++){
				rarr[k] += (arr[i]>arr[k]) ? 1 : 0;
			}
		}
		return rarr;
	};
	var binSearch = function(){};
	var merge = function(){};
	var stack = function(){};
	var randomGen = function(num){
		var arr=[];
		for(i=0;i<num;i++){
			arr.push(Math.floor(Math.random()*45)+1);
		}
		return arr;
	};
	
		/* Algorithm Matrix function */
	var basic = function(){
		$('#basic').on('click', function() {
			var mtx = new Array(new Array(5), new Array(5), new Array(5), new Array(5), new Array(5));
			var jason = [
				{
					a : 1,
					b : 2,
					c : 3,
					d : 4,
					e : 5
				},
				{
					a : 6,
					b : 7,
					c : 8,
					d : 9,
					e : 10
				},
				{
					a : 11,
					b : 12,
					c : 13,
					d : 14,
					e : 15
				},
				{
					a : 16,
					b : 17,
					c : 18,
					d : 19,
					e : 20
				},
				{
					a : 21,
					b : 22,
					c : 23,
					d : 24,
					e : 25
				}
			];
			$('#tableRight').html(app.component.panelTable(jason, 'Basic', 'default'));
		});
	};
	var zigzag = function(){
		$('#zigzag').on('click', function(){
			var a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
			var i = 0; // 배열의 행 위치를 지정해 주는 변수
			var j = 0; // 배열의 열 위치를 지정해 주는 변수
			var l = 0; // 배열의 열 시작 위치를 지정해 주는 변수
			var m = 4; // 배열의 열 끝 위치를 지정해 주는 변수
			var n = 1; // 증가 값을 지정해 주는 스위치 변수
			var p = 0; // 열의 시작 위치(l)과 끝 위치(m)의 값을 바꿀 때 사용하는 임시 변수
			for(i=0;i<5;i++){
				for(j=l;j!=m+n;j+=n){
					k++;
					a[i][j] = k;
				}
				p=l;
				l=m;
				m=p;
				n*=-1;
			}
			var jason = [
				{a:a[0][0],b:a[0][1],c:a[0][2],d:a[0][3],e:a[0][4]},
				{a:a[1][0],b:a[1][1],c:a[1][2],d:a[1][3],e:a[1][4]},
				{a:a[2][0],b:a[2][1],c:a[2][2],d:a[2][3],e:a[2][4]},
				{a:a[3][0],b:a[3][1],c:a[3][2],d:a[3][3],e:a[3][4]},
				{a:a[4][0],b:a[4][1],c:a[4][2],d:a[4][3],e:a[4][4]}
				];
			$('#tableRight').html(app.component.panelTable(jason, 'Basic', 'default'));
		});
	};
	var diamond = function(){
		$('#diamond').on('click', function(){
			var a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
			var i = 0; // 배열의 행 위치를 지정
			var j = 0; // 배열의 열 위치를 지정
			var s = 2; // 열의 시작 위치가 저장될 변수
			var e = 2; // 열의 끝 위치가 저장될 변수
			for(i=0;i<5;i++){
				for(j=s;j<=e;j++){
					k++;
					a[i][j] = k;
				}
				if(i>1){
					s++;
					e--;
				} else {
					s--;
					e++;
				}
			}
			var jason = [
				{a:a[0][0],b:a[0][1],c:a[0][2],d:a[0][3],e:a[0][4]},
				{a:a[1][0],b:a[1][1],c:a[1][2],d:a[1][3],e:a[1][4]},
				{a:a[2][0],b:a[2][1],c:a[2][2],d:a[2][3],e:a[2][4]},
				{a:a[3][0],b:a[3][1],c:a[3][2],d:a[3][3],e:a[3][4]},
				{a:a[4][0],b:a[4][1],c:a[4][2],d:a[4][3],e:a[4][4]}
				];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	var sandGlass = function(){
		$('#sandGlass').on('click', function(){
			var a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var x = 5; // 입력 받은 배열의 크기가 저장될 변수, 즉 x가 5면 배열의 크기는 5행 5열
			var m = 2; // 배열의 중간 행 번호가 저장될 변수, 즉 5행 5열의 배열인 경우 m은 3
			var l = 2; // 행에서 열의 시작 위치 또는 끝 위치를 지정해 주는 변수
			var i = 0; // 배열의 행 위치를 지정해 주는 변수
			var j = 0; // 배열의 열 위치를 지정해 주는 변수
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
			for(i=0;i<x;i++){
				for(j=m-l;j<=m+l;j++){
					k++;
					a[i][j]=k;
				}
				if(i<=m-1){
					l--;
				} else {
					l++;
				}
			}
			
			var jason = [
				{a:a[0][0],b:a[0][1],c:a[0][2],d:a[0][3],e:a[0][4]},
				{a:a[1][0],b:a[1][1],c:a[1][2],d:a[1][3],e:a[1][4]},
				{a:a[2][0],b:a[2][1],c:a[2][2],d:a[2][3],e:a[2][4]},
				{a:a[3][0],b:a[3][1],c:a[3][2],d:a[3][3],e:a[3][4]},
				{a:a[4][0],b:a[4][1],c:a[4][2],d:a[4][3],e:a[4][4]}
				];
			$('#tableRight').html(app.component.panelTable(jason, 'Basic', 'default'));
		});
	};
	var snail = function(){
		$('#snail').on('click', function(){
			var a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
			var i = 0; // 배열의 행 위치를 지정해 주는 변수
			var n = 0; // 반복문의 반복 변수
			var j = -1; // 배열의 열 위치를 지정해 주는 변수
			var c = 1; // 행과 열의 증가 혹은 감소 여부가 지정될 변수, 즉 C가 -1이면 행이나 열을 감소하고, 1이면 행이나 열을 증가
			var f = 5; // 각 회전에서 수행할 수행 횟수가 지정될 변수
			while(1){
				for(n=0;n<f;n++){
					k++;
					j+=c;
					a[i][j]=k;
				}
				f--;
				if(f>0){
					for(n=0;n<f;n++){
						k++;
						i+=c;
						a[i][j]=k;
					}
					c*=-1;
				} else {
					break;
				}
			}
			var jason = [
				{a:a[0][0],b:a[0][1],c:a[0][2],d:a[0][3],e:a[0][4]},
				{a:a[1][0],b:a[1][1],c:a[1][2],d:a[1][3],e:a[1][4]},
				{a:a[2][0],b:a[2][1],c:a[2][2],d:a[2][3],e:a[2][4]},
				{a:a[3][0],b:a[3][1],c:a[3][2],d:a[3][3],e:a[3][4]},
				{a:a[4][0],b:a[4][1],c:a[4][2],d:a[4][3],e:a[4][4]}
				];
			$('#tableRight').html(app.component.panelTable(jason, 'Basic', 'default'));
		});
	};
	var magicSquare = function(){
		$('#magicSquare').on('click', function(){
			var a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var i = 0; // 배열의 행 위치를 지정해 주는 변수
			var j = 2; // 배열의 열 위치를 지정해 주는 변수
			var k = 0; // 1에서 25까지 1씩 증가되는 숫자가 저장될 변수
			var nmg = 0; // k가 5의 배수인지를 확인하기 위해 계산한 후 나머지가 저장될 변수
			for(k=1;k<=25;k++){
				a[i][j]=k;
				nmg = k%5;
				if(nmg==0){
					i++;
					continue;
				}
				i--;
				j++;
				if(i<0)
					i=4;
				if(j>4)
					j=0;
			}
			var jason = [
				{a:a[0][0],b:a[0][1],c:a[0][2],d:a[0][3],e:a[0][4]},
				{a:a[1][0],b:a[1][1],c:a[1][2],d:a[1][3],e:a[1][4]},
				{a:a[2][0],b:a[2][1],c:a[2][2],d:a[2][3],e:a[2][4]},
				{a:a[3][0],b:a[3][1],c:a[3][2],d:a[3][3],e:a[3][4]},
				{a:a[4][0],b:a[4][1],c:a[4][2],d:a[4][3],e:a[4][4]}
				];
			$('#tableRight').html(app.component.panelTable(jason, 'Basic', 'default'));
		});
	};
	
		/* Algorithm Math function */
	var determinePrime = function(){
		$('#determinePrime').on('click', function(){
			$('#tableRight').empty();
			var a = randomGen(1);
			var result = '소수';
			for(var i=2; i<a; i++) {
				if(a%i==0) {
					result='소수 아님';
					break;
				} 
			}
			app.component.divAlert('alert-primary').html('판별하는 수: '+ a + '<br>결과:' + result).appendTo($('#tableRight'));
		});
	};
	var primeSum = function(){
		$('#primeSum').on('click', function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('in1').attr('placeholder', '2 이상의 자연수 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('합 구하기').appendTo(right).on('click', function(){
				var input = $('#in1').val()*1;
				right.empty();
				var sum = 0;
				var prime = 1;
				for(var i=2; i<=input; i++){
					for(var j=2; j<i; j++) {
						if(i%j==0){
							prime = 0;
							break;
						}
					}
					if(prime==1){
						sum+=i;
					}
					prime=1;
				}
				app.component.divAlert('alert-primary').html(input +'까지의 소수들의 합은 ' + sum).appendTo(right);
			});
			
		});
	};
	var primeCount = function(){
		$('#primeCount').on('click', function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('in1').attr('placeholder', '2 이상의 자연수 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('합 구하기').appendTo(right).on('click', function(){
				var input = $('#in1').val()*1;
				right.empty();
				var count = 0;
				var prime = 1;
				for(var i=2; i<=input; i++){
					for(var j=2; j<i; j++) {
						if(i%j==0){
							prime = 0;
							break;
						}
					}
					if(prime==1){
						count++;
					}
					prime=1;
				}
				app.component.divAlert('alert-primary').html(input +'까지의 소수 개수는 ' + count).appendTo(right);
			});
			
		});
	};
	var lcmGcm = function(){
		$('#lcmGcm').on('click',function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('in1').attr('placeholder', '첫번째 숫자').appendTo(right);
			app.component.inputText('in2').attr('placeholder', '두번째 숫자').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('최대/최소 구하기').appendTo(right).on('click', function(){
				var in1 = $('#in1').val()*1, in2 = $('#in2').val()*1;
				var big = (in1>in2) ? in1 : in2, small = (in1>in2) ? in2 : in1, gcm = 0, lcm = 0, temp = 0;
				right.empty();
				while(true){
					if(big%small==0){
						gcm = small;
						break;
					} else {
						temp = big;
						big = small;
						small = temp%small;
					}
				}
				lcm = in1 * in2 / gcm;
				app.component.divAlert('alert-primary').html('입력한 수: ' + in1 + ', ' + in2 +'<br>최대공약수: ' + gcm + '<br>최소공배수: ' + lcm).appendTo(right);
			});
		});
	};
	// 유클리드 호제법
	var euclid = function(){
		$('#euclid').on('click',function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('in1').attr('placeholder', '첫번째 숫자 입력').appendTo(right);
			app.component.inputText('in2').attr('placeholder', '두번째 숫자 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('약수 구하기').appendTo(right).on('click', function(){
				var in1 = $('#in1').val()*1, in2 = $('#in2').val()*1;
				var big = (in1>in2) ? in1 : in2, small = (in1>in2) ? in2 : in1, mok = 0, nmg = 0;
				var result = '';
				while(true){
					mok = big/small;
					nmg = big%small;
					result += big + ' = ' + small + ' * ' + mok + ' + ' + nmg + '<br>';
					big = small;
					small = nmg;
					if(nmg==0){
						break;
					}
				}
				app.component.divAlert('alert-primary').html('입력한 두 수: ' + in1 +',' + in2 +'<br>결과: '+result).appendTo(right);
			});
		});
	};
	// 약수 구하기
	var factorization = function(){
		$('#factorization').on('click',function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('input').attr('placeholder', '숫자 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('약수 구하기').appendTo(right).on('click', function(){
				var input = $('#input').val()*1;
				var a = [];
				right.empty();
				for(var i=1;i<=input;i++){
					if(input%i==0){
						a.push(i);
					}
				}
				app.component.divAlert('alert-primary').html('입력한 수: ' + input +'<br>약수: '+a).appendTo(right);
			});
		});
	};
	// 소인수 분해
	var primefactor = function(){
		$('#primefactor').on('click',function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('input').attr('placeholder', '숫자 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('소인수분해 하기').appendTo(right).on('click', function(){
				var input = $('#input').val()*1;
				var prime = 2, result = '';
				var val = input;
				right.empty();
				for(var i=2;i<=input;i++){
					if(val%prime!=0) {
						prime++;
					} else {
						val/=prime;
						result += prime + '*';
					}
				}
				app.component.divAlert('alert-primary').html('입력한 수: '+ input+ '<br>소인수분해 결과: '+ result.substr(0, result.lastIndexOf('*'))).appendTo(right);
			});
		});
	};
	// 배수의 합
	var multiSum = function(){
		$('#multiSum').on('click',function(){
			var right = $('#tableRight');
			right.empty();
			app.component.inputText('mul').attr('placeholder', '숫자 입력').appendTo(right);
			app.component.inputText('scope').attr('placeholder', '범위 입력').appendTo(right);
			app.component.aButton('aButton','btn-primary').html('배수의 합 구하기').appendTo(right).on('click', function(){
				var mul = $('#mul').val()*1, scope = $('#scope').val()*1;
				var cnt = 0, sum = 0;
				var result = '';
				for(var i=1; i<=scope; i++){
					if(i%mul==0){
						sum+=i;
						result+=i+'+';
						cnt++;
					}
					if(cnt>4) {
						result += '<br>';
						cnt = 0;
					}
				}
				app.component.divAlert('alert-primary').html('입력한 배수: '+ mul + '<br>범위: 1~' + scope + '<br>배수의 합 결과: '+ result.substr(0, result.lastIndexOf('+')) + '=' + sum).appendTo(right);
			});
		});
	};
	// 근사값 구하기
	var approx = function(){
		$('#approx').on('click',function(){
			var right = $('#tableRight');
			right.empty();
		});
	};
	/* 알고리즘등차수열 */
	var series = function(){
		var wrapper = app.component.getWrapper();
		$('#series').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var arr = [{id:'aSeries', txt:'등차수열'},
				{id:'swSeries', txt:'스위치수열'},
				{id:'dSeries', txt:'계차수열'},
				{id:'factorial', txt:'팩토리얼'},
				{id:'fibonacci', txt:'피보나치'}];
			var str = '';
			$.each(arr, function(i,j){ // i: index값, j: 객체값 / jsp는 오버라이딩해서 안쓰는 파라미터가 있더라도 그 자리는 채워줘야 한다.
				str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
			});
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.html(str);
			var tableRight = $('#tableRight');	
			$('#tableRight').empty();
		    app.component.inputText('in1').attr('placeholder', '시작값,끝값,공차 입력').appendTo($('#tableRight'));
		    app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo($('#tableRight')).on('click', function() {
		       	var in1 = $('#in1').val()+"";
		    	tableRight.empty();
		    	app.component.divAlert('alert-primary').html(app.algorithm.aSeries(in1)).appendTo(tableRight);
		    });
			$('#aSeries').on('click',function() {
		        $('#tableRight').empty();
		        app.component.inputText('in1').attr('placeholder', '시작값,끝값,공차 입력').appendTo($('#tableRight'));
		        app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo($('#tableRight')).on('click', function() {
		        	var in1 = $('#in1').val()+"";
			    	tableRight.empty();
			        app.component.divAlert('alert-primary').html(app.algorithm.aSeries(in1)).appendTo(tableRight);
		        });
		    });
			$('#swSeries').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','스위치').appendTo(tableRight);
				app.component.aButton('aButton','btn-success').html('스위치').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val();
					tableRight.empty();
					app.component.divAlert('alert-success').html('결과:' + app.algorithm.swSeries(in1)).appendTo(tableRight);
				});
			});
			$('#dSeries').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','계차수열').appendTo(tableRight);
				app.component.aButton('aButton','btn-info').html('계차수열').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val();
					tableRight.empty();
					app.component.divAlert('alert-info').html('결과:' + app.algorithm.dSeries(in1)).appendTo(tableRight);
				});
			});
			$('#factorial').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','팩토리얼').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('팩토리얼').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val();
					tableRight.empty();
					app.component.divAlert('alert-warning').html('결과:' + app.algorithm.factorial(in1)).appendTo(tableRight);
				});
			});
			$('#fibonacci').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','피보나치').appendTo(tableRight);
				app.component.aButton('aButton','btn-danger').html('피보나치').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val();
					tableRight.empty();
					app.component.divAlert('alert-danger').html('결과:' + app.algorithm.fibonacci(in1)).appendTo(tableRight);
				});
			});
		});
	};
	/* 알고리즘배열 */
	var arr = function(){
		var wrapper = app.component.getWrapper();
		$('#arr').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var arr = [{id: 'selectSort', txt:'선택정렬'},
				{id: 'bubbleSort', txt:'버블정렬'},
				{id: 'insertSort', txt:'삽입정렬'},
				{id: 'ranking', txt:'석차구하기'},
				{id: 'binSearch', txt:'이분검색'},
				{id: 'merge', txt:'병합'},
				{id: 'stack', txt:'스택'}];
			var str = '';
			$.each(arr, function(i,j){
				str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
			});
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.html(str);
			var tableRight = $('#tableRight');	
			tableRight.empty();
			$('#selectSort').on('click', function(){
				var arr = randomGen(6);
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.selectSort(arr, i), 'default'));
				}
			});
			$('#bubbleSort').on('click', function(){
				var arr = randomGen(6);
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.bubbleSort(arr, i), 'default'));
				}
			});
			$('#insertSort').on('click', function(){
				var arr = randomGen(6);
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.insertSort(arr, i), 'default'));
				}
			});
			$('#ranking').on('click', function(){
				var arr = randomGen(6);
				tableRight.html('<h2 style="color:red;">점수</h2> ');
				tableRight.append(app.component.horList(arr, 'default'));
				tableRight.append('<br/><h2 style="color:red;">석차</h2>')
				tableRight.append(app.component.horList(app.algorithm.ranking(arr), 'default'));
			});
		});
	};
	/* 알고리즘행렬 */
	var matrix = function(){
		var wrapper = app.component.getWrapper();
		$('#matrix').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var arr = [
				{id:'basic', txt:'기본 5x5'},
				{id:'zigzag', txt:'지그재그'},
				{id:'diamond', txt:'◆'},
				{id:'sandGlass', txt:'모래시계'},
				{id:'snail', txt:'달팽이'},
				{id:'magicSquare', txt:'마방진'}
			];
			var str = '';
			$.each(arr, function(i,j){
				str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
			});
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.html(str);
			var tableRight = $('#tableRight');
			tableRight.empty();
			basic();
			zigzag();
			diamond();
			sandGlass();
			snail();
			magicSquare();
		});
	};
	/* 알고리즘수학 */
	var math = function(){
		var wrapper = app.component.getWrapper();
		$('#math').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);var arr = [
				{id:'determinePrime', txt:'소수 판별'},
				{id:'primeSum', txt:'소수의 합'},
				{id:'primeCount', txt:'소수의 개수'},
				{id:'lcmGcm', txt:'최대공약수/최소공배수'},
				{id:'euclid', txt:'유클리드 호제법'},
				{id:'factorization', txt:'약수구하기'},
				{id:'primefactor', txt:'소인수분해'},
				{id:'multiSum', txt:'배수의 합'},
				{id:'approx', txt:'근사값 구하기'}
			];
			var str = '';
			$.each(arr, function(i,j){
				str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
			});
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.html(str);
			determinePrime();
			primeSum();
			primeCount();
			lcmGcm();
			euclid();
			factorization();
			primefactor();
			multiSum();
			approx();
		});
	};
	/* 알고리즘응용 */
	var appl = function(){
		var wrapper = app.component.getWrapper();
		$('#appl').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableRight = $('#tableRight');
			app.component.inputText('inputText').attr('placeholder','어플').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(app.component.wrapper).on('click', function() {
				tableRight.empty();
				aSeries(app.component.inputText('inputText').val());
			});
		});
	};
		/* Algorithm JSON */
	return {
		init : init,
		onCreate : onCreate,
		setContentView : setContentView,
		/* Series */
		series : series,
		aSeries : aSeries,
		swSeries : swSeries,
		dSeries : dSeries,
		factorial : factorial,
		fibonacci : fibonacci,
		/* Array */
		arr : arr,
		selectSort : selectSort,
		bubbleSort : bubbleSort,
		insertSort : insertSort,
		ranking : ranking,
		binSearch : binSearch,
		merge : merge,
		stack : stack,
		randomGen : randomGen,
		/* Matrix */
		matrix : matrix,
		basic : basic,
		zigzag : zigzag,
		diamond : diamond,
		sandGlass : sandGlass,
		snail : snail,
		magicSquare : magicSquare,
		/* Math */
		math : math,
		determinePrime : determinePrime,
		primeSum : primeSum,
		primeCount : primeCount,
		lcmGcm : lcmGcm,
		euclid : euclid,
		factorization : factorization,
		primefactor : primefactor,
		multiSum : multiSum,
		approx : approx,
		/* Application */
		appl : appl
	};
})();
/*========= app-oop =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Object Oriented Programming Test
app-oop-encap
app-oop-inher
app-oop-polym
=================================*/
app.oop = (function(){
	var init = function() {
		onCreate();
	};
	var onCreate = function() {
		setContentView();
		encap();
	};
	var setContentView = function(){};
	var encap = function() {
		var wrapper = app.component.getWrapper();
		$('#encap').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var arr = [
				{id: 'encap1', txt:'캡슐화'},
				{id: 'inher1', txt:'상속성'},
				{id: 'polym1', txt:'다형성'}				
			];
			var str = '';
			$.each(arr, function(i,j){
				str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
			});
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.html(str);
			var tableRight = $('#tableRight');
			tableRight.empty();
			app.component.inputText('in1').attr('placeholder','이름').appendTo(tableRight);
			app.component.inputText('in2').attr('placeholder','나이').appendTo(tableRight);
			app.component.inputText('in3').attr('placeholder','성별').appendTo(tableRight);
			app.component.inputText('in4').attr('placeholder','직업').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('입력하기').appendTo(tableRight).on('click', function() {
				app.person.setName($('#in1').val());
				app.person.setAge($('#in2').val());
				app.person.setGender($('#in3').val());
				app.person.setJob($('#in4').val());
				tableRight.empty();
				app.component.divAlert('alert-danger').html(app.person.toString()).appendTo(tableRight);
			});
		});
		$('#encap1').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
			app.oop.OOP_MENU.appendTo(tableLeft);
			app.component.inputText('in1').attr('placeholder','이름').appendTo(tableRight);
			app.component.inputText('in2').attr('placeholder','나이').appendTo(tableRight);
			app.component.inputText('in3').attr('placeholder','성별').appendTo(tableRight);
			app.component.inputText('in4').attr('placeholder','직업').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('입력하기').appendTo(tableRight).on('click', function() {
				app.person.setName($('#in1').val());
				app.person.setAge($('#in2').val());
				app.person.setGender($('#in3').val());
				app.person.setJob($('#in4').val());
				tableRight.empty();
				app.component.divAlert('alert-danger').html(app.person.toString()).appendTo(tableRight);
			});
		});
	};
	var inher = function() {
		var wrapper = app.component.getWrapper();
		$('#inher').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
		$('#inher1').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
	};
	var polym = function() {
		var wrapper = app.component.getWrapper();
		$('#polym').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
		$('#polym1').on('click', function() {
			wrapper.empty();
			wrapper.append(app.ui.table);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
	};
	return {
		init : init,
		onCreate : onCreate,
		setContentView : setContentView,
		encap : encap,
		inher : inher,
		polym : polym
	};
})();
/*========= app-bbs =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Component for using Single Page Application 
app-component-init
=================================*/
app.bbs= (function(){
    var init = function() {
	onCreate();
    };
    var onCreate = function() {
	main();
    };
    var main = function(){
	var wrapper =  $('#wrapper');
	var ctx = app.session.getContextPath();
	$('#bbs').on('click',function(e){
	   e.preventDefault();
	   var table = app.ui.bbs();
	   var row = '';
	   $.getJSON(ctx + '/list/bbs/1',function(data){
	       $.each(data.list,function(i,item){
		   row += '<tr><td>'+(i+1)+'</td>'
	                 +'<td><a href="">'+item.title+'</a></td>'
	                 +'<td>'+item.writer_id+'</td>'
	                 +'<td>'+item.reg_date+'</td>'
	                 +'<td>'+item.read_count+'</td></tr>';
	       });
	       $('#count').html('총 게시글 수: '+data.count);
	       table += row;
	       table += '</tbody></table>';
//	       var pagination ='<nav id="pagination" aria-label="Page navigation" align="center"><ul class="pagination"></ul></nav>';
	       var tab = $('#bbs_table');
	       tab.addClass('bbs_table');
	       tab.find('tr:nth-child(1) th').attr('colspan','5');
	       tab.find('tr:nth-child(2)').find('th:nth-child(1)').css('width','50px');
	       tab.find('tr:nth-child(2)').find('th:nth-child(2)').css('width','200px');
	       tab.find('tr:nth-child(2)').find('th:nth-child(3)').css('width','100px');
	       tab.find('tr:nth-child(2)').find('th:nth-child(4)').css('width','100px');
	       tab.find('tr:nth-child(2)').find('th:nth-child(5)').css('width','50px');
	       wrapper.html(table); 
	   });
	});
    };
    return {
	init : init,
	onCreate : onCreate,
	main : main
    };
})();

/*========= app-component =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Component for using Single Page Application 
app-component-init
app-component-getWrapper
app-component-setWrapper
app-component-getBody
app-component-setBody
app-component-div
app-component-aButton
app-component-bButton
app-component-inputText
app-component-divAlert
app-component-horizontalTable
app-component-horList
app-component-panelTable
app-component-radioButton
app-component-registerInputtext
app-component-registerSubmit
app-component-patientGnb
=================================*/
app.component = (function(){
	var _body, _wrapper;
	var setBody = function(body) { this._body = body; }
	var getBody = function() { return this._body; }
	var setWrapper = function(wrapper) { this._wrapper = wrapper; }
	var getWrapper = function() { return this._wrapper; }
	var init = function(){ onCreate(); };
	var onCreate = function(){ setContentView(); };
	var setContentView = function() {
		app.component.setWrapper($('#wrapper'));
		app.component.setBody($('body'));
	};
	return {
		init : init,
		getWrapper : getWrapper,
		setWrapper : setWrapper,
		getBody : getBody,
		setBody : setBody,
		div : function(id){
			return $(id);
		},
		aButton : function(id, type){
			return $('<a id=' + id + ' href="#" class="btn ' + type + '" role="button">aButton</a>');
		},
		bButton : function(){
			return $('<button id="bButton" type="button" class="btn btn-default">Button</button>');
		},
		inputText : function(id){
			return $('<input id="' + id + '" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
		},
		divAlert : function(type){
			return $('<div class="alert '+type+'" role="alert">example</div>');
		},
		horizontalTable : function(arr){
			var table='';
			table += '<table style="width:210px; height:280px; border-collapse: collapse; border: 1px solid black; margin: 0 auto"><tbody><tr><td>';
			$.each(arr, function(i,j){
				table += '<td>' + arr[i] + '</td>';
			});
			table += '</tr></tbody></table>';
			$('#table td').css('border', '1px solid black');
			return table;
		},
		horList : function(arr, i) {
			var type='';
			switch(i){
				case 'default' : type='btn-default';break;
			}
			var list = '<div class="btn-group" role="group" aria-label="...">';
			$.each(arr, function(i,j){
				list+='<button id="list-button-"'+i+' type="button" class="btn '+type+'">'+arr[i]+'</button>';
			});
			list+='</div>';
			return list;
		},
		panelTable: function(json,txt,type){
	          var table=
	             '<div class="panel panel-'+type+'">'
	             +'<div class="panel-heading">행렬</div>'
	             +'<table id="table">'
	             +'<tr>'
	             +'<th colspan="5">'+txt+'</th>'
	             +'</tr>'
	             +'<tbody>';
	          $.each(json, function(i,j){
	             table+='<tr><td style="width:20%">'+j.a+'</td><td style="width:20%">'+j.b+'</td><td style="width:20%">'+j.c+'</td><td style="width:20%">'+j.d+'</td><td style="width:20%">'+j.e+'</td></tr>';
	          });
	          table+='</tbody></table>';
	          return table;
		},
		radioButton: function(id,name,value,html){
		    var btn = '<label class="radio-inline">'+
				'<input type="radio" id="'+ id +'" name="'+name+'" value="'+value+'">'+html
				'</label>';
		    return btn;
		},
		registerInputtext: function(id,name,type,placeholder){
		    var input = '<div class="form-group">'+
				'<input type="'+type+'" name="'+name+'" id="'+id+'" tabindex="2" class="form-control" placeholder="'+placeholder+'">'+
				'</div>';
		    return input;
		},
		registerSubmit: function(id){
		    var btn = '<div class="form-group"><div class="row"><div class="col-sm-6 col-sm-offset-3"><input type="submit" name="register-submit" id="register-'+id+'" tabindex="4" class="form-control btn btn-register" value="Register Now"></div></div></div>';
		    return btn;
		}
	};
})();
/*========= app-ui =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : UI for using JavaScript page at once
app-ui-patientGnb
app-ui-patientDetail
app-ui-table
app-ui-chart
app-ui-bbs
=================================*/
app.ui={
	patientGnb: function(){
    	   var gnb = '<div class="index_gnbtab wtac" style="position: relative;"><ul class="index_gnb">';
	   var arr = ['home/홈으로','mypage/MY PAGE','treatlist/나의 진료기록','board/게시판','customer/고객참여마당','main/로그아웃'];
	   for(var i=0; i<6; i++){
		   gnb+='<li><a class="index_gnb_index" href="'+arr[i].split("/")[0]+'">'+arr[i].split("/")[1]+'</a></li>'   
    	   }
		   gnb += '</ul></div>';
    	   return gnb;
       },
	patientDetail: function(){
    	   var ctx = app.session.getContextPath();
    	   var detail = '<div class="con_setting" style="position: relative; top: 20px; text-align:center; width:100%"><div class="wtac"><table class="pat_detail"><tr style="text-align: left;"><td colspan="5"><div><img src="'+ctx+'/resources/img/common/defaultimg.jpg"alt=""width="160px"/></div></td></tr><tr><td style="width: 60px"rowspan="5"><span style="font-size: 20px">내<br/>정<br/>보</span></td>'
	   +'<td style="width: 100px; background-color: #bfcedd">이름</td><td id="name" style="width: 150px"></td>'
	   +'<td style="width: 100px; background-color: #bfcedd">직업</td><td id="job" style="width: 150px"></td>'
	   +'</tr><tr><td style="background-color: #bfcedd;">생년월일</td><td id="birth"></td><td style="background-color: #bfcedd;">키</td><td>180cm</td></tr><tr><td style="background-color: #bfcedd;">성별</td><td id="gender"></td><td style="background-color: #bfcedd;">나이/몸무게</td><td id="age"> / 70kg</td></tr><tr><td style="background-color: #bfcedd;">전화번호</td><td id="phone"></td><td style="background-color: #bfcedd;">혈액형</td><td>B</td></tr><tr><td style="background-color: #bfcedd;">주소</td><td id="addr"></td><td style="background-color: #bfcedd;">주치의</td><td><a onclick="goDocDetail()">채워야댐</a></td></tr></table></div>'
	   +'<div style="margin-top: 10px"><a href="update"><input id="btn-default" type="button" value="차트보기"/></a></div></div>';
	   return detail;
	},
	table : function(){
	    var table = '<div style="width:100%"><table style="margin: 0 auto; width:500px; height:300px; border-collapse: collapse; border: 1px solid black;"><tr><td id="tableLeft" style="width:50%; border: 1px solid black;"></td><td id="tableRight"></td></tr></table></div>';
	    return table;
	},
	chart : function(){
	    var ctx = app.session.getContextPath();
	    var image = app.session.getImagePath();
	    $("<div></div>").attr('id','div-chart').appendTo('#wrapper');
       		$('#div-chart').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
       		$("<div></div>").attr('id','app-chart-top').appendTo('#div-chart');
       		var table= '<table><tr><td rowspan="5" style="width:100px">환<br/>자<br/>정<br/>보</td><td class="app-chart-table-elem">이름</td><td id="name" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">나이</td><td id="age" class="app-chart-top-table"></td></tr>'
       		    +'<tr><td class="app-chart-table-elem">생년월일</td><td id="birth" class="app-chart-top-table"></td><td class="app-chart-col-table">키</td><td id="height" class="app-chart-top-table">180cm</td><td class="app-chart-table-elem">직업</td><td id="job" class="app-chart-top-table"></td></tr>'       
           	    +'<tr><td class="app-chart-table-elem">성별</td><td id="gender" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">몸무게</td><td id="weight" class="app-chart-top-table">80kg</td></tr>'
           	    +'<tr><td class="app-chart-table-elem">전화번호</td><td id="phone" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">혈액형</td><td id="bloodtype" class="app-chart-top-table">B</td></tr>'
               	    +'<tr><td class="app-chart-table-elem">주소</td><td id="addr" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">주치의</td><td id="doctorName" class="app-chart-top-table"></td></tr>'
               	    +'</table>';			 
        	$(table).attr('id','app-chart-top-table').appendTo('#app-chart-top');
        	$('#app-chart-top-table').css('width','800px');
        	$('#app-chart-top').addClass('app-chart-top').css('text-align','center');
        	$("<div></div>").attr('id','app-chart-center').appendTo('#app-chart-top');
        	$('#app-chart-center').addClass('app-chart-center');
        	var fileUpload = '<form id="form" name="form" method="post" action="'+ctx+'/post/chart/img" enctype="multipart/form-data"><input type="file" id="file" name="file"/><input type="submit" id="btn-file-upload" value="파일업로드"/></form>';
        	$('#app-chart-center').html('<div class="app-chart-center-center">처방전<br/><img src="'+image+'/common/defaultimg.jpg" style="width:200px; height:200px; float:left;"/></div>'+fileUpload);
        	$('#form-file-upload').css('margin-top','20px');
	},
	bbs : function(){
	    var table = '<div id="bbs_container" style="margin: 0 auto;">'
            +'<div>'
            +'<select name="property" name="property">'
            +'<option value="id">작성자</option>'
            +'<option value="title">제목</option>'
            +'</select>'
            +'<input type="text" name="searchKeyword"/>'
            +'<input type="button" value="검색"/>'
            +'<table id="bbs_table"><thead>'
            +'<tr>'
            +'<td id="count">총게시글수: </td>'
            +'</tr>'
            +'<tr>'
            +'<th>번호</th>'
            +'<th>제목</th>'
            +'<th>작성자</th>'
            +'<th>날짜</th>'
            +'<th>조회수</th>'
            +'</tr></thead><tbody>';
//	            //if문
//	            +'<c:if test="${requestScope.prevBlock gt 0}">'
//	               +'<a href="${context}/board.do?action=list&page=articleList&pageNO=${requestScope.prevBlock}">◀prev</a>'
//	            +'</c:if>'
//	            //for문
//	            +'<c:forEach begin="${requestScope.blockStart}" end="${requestScope.blockEnd}" step="1" varStatus="i">'
//	               +'<li>'
//	               +'<c:choose>'
//	                  +'<c:when test="${i.index eq pageNO}">'
//	                     +'<a href="#"><font>${i.index}</font></a>'
//	                  +'</c:when>'
//	                  +'<c:otherwise>'
//	                     +'<a href="${context}/board.do?action=list&page=articleList&pageNO=${i.index}">${i.index}</a>'
//	                  +'</c:otherwise>'
//	               +'</c:choose>'
//	               +'</li>'
//	            +'</c:forEach>'
//	            //if문
//	            +'<c:if test="${requestScope.nextBlock le pageCount}">'
//	               +'<a href="${context}/board.do?action=list&page=articleList&pageNO=${requestScope.nextBlock}">next▶</a>'
//	            +'</c:if>'
//	            +'</ul>'
//	            +'</nav>'
//	            +'</div>'
//	            +'</div>';
	   
	    
	    return table;
	}
};
/*========= app-permission =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Permission for login or register user
app-permission-execute
app-permission-emailCheck
app-permission-login
=================================*/
app.permission=(function(){
	var execute = function(){
		var ctx = app.session.getContextPath();
		login();
		
	    $('#login-form-link').on('click', function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').on('click', function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
			var registerInfo = $('#register-info');
			registerInfo.empty();
			$('#radio_patient').on('click',function(){
				registerInfo.empty();
				registerInfo.append(app.component.registerInputtext('id','id','text','ID'));
				registerInfo.append(app.component.registerInputtext('pass','pass','password','Password'));
				registerInfo.append(app.component.registerInputtext('confirm-password','confirm-password','password','Confirm Password'));
				registerInfo.append(app.component.registerInputtext('name','name','text','Username'));
				registerInfo.append(app.component.radioButton('male','gen','M','남'));
				registerInfo.append(app.component.radioButton('female','gen','F','여'));
				registerInfo.append(app.component.registerInputtext('phone','phone','text','Phone'));
				registerInfo.append(app.component.registerInputtext('email','email','email','Email Address'));
				registerInfo.append(app.component.registerInputtext('position','position','text','Position'));
				registerInfo.append(app.component.registerInputtext('major','major','text','Major'));
				registerInfo.append(app.component.registerInputtext('birth','birth','text','Birth(ex:910101-1)'));
				registerInfo.append(app.component.registerSubmit('patient'));
			});
			$('#radio_doctor').on('click',function(){
				registerInfo.html('<div style="margin-top: 10px;"></div>');
				registerInfo.append(app.component.registerInputtext('id','id','text','ID'));
				registerInfo.append(app.component.registerInputtext('pass','pass','password','Password'));
				registerInfo.append(app.component.registerInputtext('confirm-password','confirm-password','password','Confirm Password'));
				registerInfo.append(app.component.registerInputtext('name','name','text','Username'));
				registerInfo.append(app.component.radioButton('male','gen','M','남'));
				registerInfo.append(app.component.radioButton('female','gen','F','여'));
				registerInfo.append('<div style="margin-top: 10px;"></div>');
				registerInfo.append(app.component.registerInputtext('phone','phone','text','Phone'));
				registerInfo.append(app.component.registerInputtext('email','email','email','Email Address'));
				registerInfo.append(app.component.registerInputtext('position','position','text','Position'));
				registerInfo.append(app.component.registerInputtext('major','major','text','Major'));
				registerInfo.append(app.component.registerInputtext('birth','birth','text','Birth(ex:910101-1)'));
				registerInfo.append(app.component.registerSubmit('doctor'));
				$('#register-doctor').on('click',function(e){
					e.preventDefault();
					var _id = $('#id').val();
					var _pass = $('#pass').val();
					var _name = $('#name').val();
					var _phone = $('#phone').val();
					var _email = $('#email').val();
					var _position = $('#position').val();
					var _major = $('#major').val();
					var _birth = $('#birth').val();
					var _gen = $('input[name=gen]').val();
					if(app.util.validation(_id) && app.util.validation(_pass) && app.util.validation(_name) && app.util.validation(_phone)
							){
						var json = {
							'id' : _id,
							'pass' : _pass,
							'name' : _name,
							'phone' : _phone,
							'email' : _email,
							'position' : _position,
							'major' : _major,
							'birth' : _birth,
							'gen' : _gen
						};
						$.ajax({
							url: ctx+"/post/doctor",
							method: "POST",
							data: JSON.stringify(json),
							dataType: "json",
							contentType: "application/json",
							success : function(data){
								alert(data.result +",  "+ data.name);
							},
							error : function(xhr,status,msg){
								alert(msg);
							}
						});
					}else{
						alert('값이 모두 입력되지 않았습니다.');
					}
					
				});
			});
			$('#radio_nurse').on('click',function(){
				registerInfo.append(app.component.registerSubmit('nurse'));
				$('#register-nurse').on('click',function(e){
					e.preventDefault();
				});
			});
			$('#radio_admin').on('click',function(){
				registerInfo.append(app.component.registerSubmit('admin'));
				$('#register-admin').on('click',function(e){
					e.preventDefault();
				});
			});
		});
	};
	var login = function(){
		console.log('login() entry');
		var ctx = app.session.getContextPath();
		var authId = $.cookie('authId');
		if(authId != undefined) {
			$('#username').val(authId);
			$('#remember').prop("checked",true);
		}
		$('#login-submit').on('click',function(e){
			if($.trim($("#username").val()) == "") {
	            alert("아이디를 입력하세요");
	            return;
	        } else {
	            //아이디저장 체크되어있으면 쿠키저장
	        	var rememberId = $('#remember').prop("checked");
	            if(rememberId) {
	                $.cookie('authId', $("#username").val());
	            //아이디저장 미체크면 쿠키에 정보가 있던간에 삭제
	            } else {
	                $.removeCookie("authId");
	            }
	            e.preventDefault();
	            var id = rememberId ? $.cookie('authId') : $('#username').val();
	            $.ajax({
	        	url: ctx + "/login",
			method: "POST",
			data: JSON.stringify({ 
			    id : id, 
			    pw : $('#password').val() 
			}),
			dataType: "json",
			contentType : "application/json",
			success : function(data) {
			if(data.result==='success'){
			    $('#boot-nav').remove();
			    var wrapper = $('#wrapper');
				wrapper.html(app.ui.patientGnb());
				wrapper.append(app.ui.patientDetail());
				var profileArr = app.util.calcProfile(data.user.jumin);
				var birth = profileArr[0], age = profileArr[1], gender = profileArr[2];
				$('#name').text(data.user.name);
				$('#job').text(data.user.job);
				$('#phone').text(data.user.phone);
				$('#addr').text(data.user.addr);
				$('#birth').text(birth);
				$('#age').text(age);
				$('#gender').text(gender);
				$('#btn-default').on('click',function(e){
				    var wrapper = $('#wrapper');
				    wrapper.html(app.ui.patientGnb());
				    e.preventDefault();
				    $.ajax({
					url: ctx + '/get/chart',
					method: 'POST',
					data: JSON.stringify({
					    id : id
					}),
					dataType: 'json',
					contentType: 'application/json',
					success: function(data){
					    if(data.result === 'fail'){
						console.log('차트가 존재하지 않음.');
						$('<div><h1 id="msg"></h1></div>').attr('id','chart-free').appendTo('#wrapper');
						$('#chart-free').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
						$('#msg').text('등록된 차트가 없습니다.');	
					    } else {
						var chartId = data.chart.chartId;
						console.log('차트가 존재함. 차트 아이디:' + chartId);
						wrapper.append(app.ui.chart());
						$('#name').text(data.chart.name);
						$('#job').text(data.chart.job);
						$('#phone').text(data.chart.phone);
						$('#addr').text(data.chart.addr);
						$('#birth').text(birth);
						$('#age').text(age);
						$('#gender').text(gender);
						$('#doctorName').text(data.chart.doctorName);
						$("<div></div>").attr('id','app-chart-bottom').appendTo('#app-chart-center');
						var chartList = '<table><thead id="thead">';
						var row = '<tr>';
						var arr=['순서','진료일','진료 NO','담당의사','직책','진료과목','병명','처방내역'];
						for(var i=0;i<8;i++){
						    row+='<th style="border:1px solid black; text-align: center;">'+arr[i]+'</th>';
						}
						row+='</tr></thead><tbody id="tbody">';
						chartList+=row;
						row='';
						$.each(data.list,function(i,chart){
						    row+='<tr>'
							+ '<td style="border:1px solid black; text-align: center;">' + (i+1) + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.treatmentId + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.treatDate + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.doctorName + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.doctorPosition + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.doctorMajor + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.chartContents + '</td>'
							+ '<td style="border:1px solid black; text-align: center;">' + chart.treatContents + '</td></tr>'
						});
						chartList+=row + '</tbody></table>';
						$('.row').css('border','1px solid black').addClass('app-text-center');
						$(chartList).attr('id','chart-list').css('margin-top','20px').addClass('app-chart-bottom-table').appendTo('#app-chart-bottom');
						$('#btn-file-upload').on('click',function(e){
						    e.preventDefault();
						    console.log('파일업로드 버튼을 클릭했을 때 chartId:'+chartId);
						    $.ajax({
							url : ctx + '/post/chart/id',
							method : 'POST',
							data : JSON.stringify({
							    id : chartId
							}),
							dataType : 'json',
							contentType : 'application/json',
							success : function(data) {
							    alert('전송 완료!!');
							},
							error : function(x,s,m) {
							    alert(m);
							}
						    });
						    $('#form').ajaxForm({
							url: $('#form').attr('action'),
							dataType : 'text',
							encType: 'multipart/form-data',
							beforeSubmit : function(){
							    alert('로딩화면!');
							},
							success : function(data){
							    alert('등록완료!' + data.result);
							}
						    });
						    $('#form').submit();
						});
					    }
					},
					error: function(x,s,m){
					    alert(m);
					}
				    });
				});
    				} else {
    				    alert('Please confirm your ID/PW.');
    				}
			},
			error : function(xhr, status, msg) {
			    alert('로그인 실패이유: ' + msg);
			}
	            });
	        }
		});
	};
	return { execute : execute, 
		emailCheck : function(str){
			var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[0_9a-zA-Z-]+){1,3}$/;
			if(str.length == 0) {
				return false;
			}
			if(!str.match(regExp)){
				return false;
			}
			return true;
		},
		login : login
	};
})();
/*========= app-navi =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Navigation in JSP Pages
=================================*/
app.navi=(function(){
	
})();
/*========= app-util =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Etc methods(ex: email check validation, calculation profile, datetime check algorithm)
app-util-validation
app-util-calcProfile
app-util-datetime
=================================*/
app.util={
	validation : function(x) {
		return (x != "");
	},
	calcProfile : function(ssn) {
		var arr = [];
		var date = app.util.datetime();
		var year = date.substring(0,4)*1, month = date.substring(4,6)*1, day = date.substring(6,8)*1;
		var age = ssn.substring(0,2)*1;
		var flag = ssn.charAt(7) == '3' || ssn.charAt(7) == '4';
		arr.push(flag? '20'+ ssn.substring(0,2) +'년 ' + ssn.substring(2,4) + '월 '+ ssn.substring(4,6) + '일' : '19'+ssn.substring(0,2) + '년 ' + ssn.substring(2,4) + '월 ' + ssn.substring(4,6)+'일');
		arr.push(flag? year-2000-age +'세': year-1900-age+'세');
		arr.push(ssn.charAt(7)==='1' || ssn.charAt(7)==='3' ? '남자' : '여자');
		return arr;
	},
	datetime : function(){	
		var d = new Date();
		var month = d.getMonth() +1;
		var year = d.getYear()-100;
		var calcstr = '20' + year + '0' + month +'' + d.getDate();
		var showstr = '20' + year + '년 0' + month +'월 ' + d.getDate() +'일';
		$('#date').html(showstr);
		return calcstr;
	}
};
/*========= app-person =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Using person in OOP
app-person-init
=================================*/
app.person = (function(){
	var wrapper, ctx, img, js, css;
	var init = function(){
		wrapper = app.component.getWrapper();
		ctx = app.session.getContextPath();
		img = app.session.getImagePath();
		js = app.session.getJavascriptPath();
		css = app.session.getStylePath();
		$('#brand').on('click',function(){
			alert('brand click!');
		});
		$('#wrapper').load(ctx+'/permission/form');
	};
	return {
		init : init
	};
})();

/*========= app-info =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Practice for OOP
=================================*/
app.info = (function() { // var를 쓴 것과 같음
	var _name, _age, _gender, _job;
	return {
		setName : function(name) { this._name = name;},
		setAge : function(age) { this._age = age;},
		setGender : function(gender) { this._gender = gender;},
		setJob : function(job) { this._job = job;},
		getName : function() { return this._name;},
		getAge : function() { return this._age;},
		getGender : function() { return this._gender;},
		getJob : function() { return this._job;},
		toString : function() {
			return "입력한 정보<br>이름: " + this._name 
			+ "<br>나이: " + this._age 
			+ "세<br>성별: " + this._gender 
			+ "<br>직업: " + this._job;
		}
	};
})();
/************************
 * Controller
 * app.controller
 * 
 ***********************/
app.controller = (function(){})();