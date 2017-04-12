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
	// Context(META-INF)
app.context = (function(){
	// Android에서 항상 Parameter를 Context context로 받았던 것과 같은 이치
	var init = function(context){ 
		app.session.init(context); // Template Method Pattern(Hook)
		onCreate();
	};
	var onCreate = function(){
		setContentView();
		app.component.init();
		app.algorithm.init();
		app.oop.init();
	};
	var setContentView = function(){
		
	};
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate
	};
})(); // NameSpace Pattern
	// Session
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
	// Util
app.util = (function(){
	
})();

	// Algorithm Method
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
	var horizontalTable = function(arr){
		var table='';
		table += '<table style="width:210px; height:280px; border-collapse: collapse; border: 1px solid black; margin: 0 auto"><tbody><tr><td>';
		$.each(arr, function(i,j){
			table += '<td>' + arr[i] + '</td>';
		});
		table += '</tr></tbody></table>';
		$('#table td').css('border', '1px solid black');
		return table;
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
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);var arr = [
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
			wrapper.append(app.algorithm.TABLE);
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
		horizontalTable : horizontalTable,
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
	/* OOP Method */
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
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
		$('#inher1').on('click', function() {
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
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
			wrapper.append(app.algorithm.TABLE);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
		});
		$('#polym1').on('click', function() {
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
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
		/************************
		 * View
		 * app.component
		 * app.navi
		 * app.patient
		 ***********************/

	// Component
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
	       }
	};
})();

	// Navigator
app.navi=(function(){
	
})();

	// Patient
app.patient = (function(){
	
})();

app.algorithm.TABLE = '<div style="width:100%"><table style="margin: 0 auto; width:500px; height:300px; border-collapse: collapse; border: 1px solid black;"><tr><td id="tableLeft" style="width:50%; border: 1px solid black;"></td><td id="tableRight"></td></tr></table></div>';
app.algorithm.MATRIX_MENU = '<ul class="list-group"><li id="matrix1" class="list-group-item"><a href="#">직각 삼각형</a></li><li id="matrix2" class="list-group-item"><a href="#">직각삼각형(뒤로부터)</a></li><li id="matrix3" class="list-group-item"><a href="#">ㄹ자 채우기</a></li><li id="matrix4" class="list-group-item"><a href="#">◆</a></li><li id="matrix5" class="list-group-item"><a href="#">◇</a></li><li id="matrix6" class="list-group-item"><a href="#">모래시계</a></li><li id="matrix7" class="list-group-item"><a href="#">■-◀</a></li><li id="matrix8" class="list-group-item"><a href="#">◀</a></li><li id="matrix9" class="list-group-item"><a href="#">90도 회전</a></li><li id="matrix10" class="list-group-item"><a href="#">달팽이</a></li><li id="matrix11" class="list-group-item"><a href="#">대각선 채우기(▨)</a></li><li id="matrix12" class="list-group-item"><a href="#">대각선 채우기(▧)</a></li><li id="matrix13" class="list-group-item"><a href="#">마방진</a></li></ul>';


/* OOP Practice */
app.person = (function() { // var를 쓴 것과 같음
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