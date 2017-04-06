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
	var selectSort = function(input, cycle) {
		var arr = [];
		var temp = 0;
		var result = "";
		for(i=0; i<6; i++) {
			arr[i] = input.split(",")[i]*1;
		}
		for(i=0; i<cycle; i++) {
			for(j=i+1; j<arr.length; j++) {
				if(arr[i]>arr[j]) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		for(i=0; i<=arr.length; i++) {
			result += arr[i] + " ";
		}
		return result;
	};
	var bubbleSort = function(input, cycle) {
		var arr = [];
		var temp = 0;
		var result = "";
		for(i=0; i<6; i++) {
			arr[i] = input.split(",")[i]*1;
		}
		for(i=0; i<cycle; i++) {
			for(j=0;j<arr.length-1;j++){
				if(arr[i]>arr[i+1]){
					temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
			}
		}
		for(i=0; i<=arr.length; i++) {
			result += arr[i] + " ";
		}
		return result;
	};
	var insertSort = function(input, cycle) {
		var arr = [];
		var temp = 0;
		var result = "";
		for(i=0; i<6; i++) {
			arr[i] = input.split(",")[i]*1;
		}
		for (i = 1; i < 10; i++) {
			for (j = 0; j <= i; j++) {
				if (arr[i] < arr[j]) {
					temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		for(i=0; i<=arr.length; i++) {
			result += arr[i] + " ";
		}
		return result;
	};
	var matrix1 = function(){
		var arr = [];
		for(i=0; i<5; i++){
			arr[i] = new Array[5];
		}
		var val = 0;
		var arrStr = "";
		for(i=0; i<5; i++){
			for(j=0; j<5; j++){
				val++;
				arr[i][j] = val;
				arrStr += arr + "<br>";
			}
		}
		return arrStr;
	};
	var matrix2 = function(){};
	var matrix3 = function(){};
	var matrix4 = function(){};
	var matrix5 = function(){};
	var matrix6 = function(){};
	var matrix7 = function(){};
	var matrix8 = function(){};
	/* 알고리즘등차수열 */
	var series = function(){
		var wrapper = app.component.getWrapper();
		$('#series').on('click', function() {
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.append(app.algorithm.SERIES_MENU);
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
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.append(app.algorithm.ARR_MENU);
			var tableRight = $('#tableRight');	
			tableRight.empty();
			app.component.inputText('in1').attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
			app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('선택 정렬').appendTo(tableRight).on('click', function() {
				var in1 = $('#in1').val(), in2 = $('#in2').val();
				console.log('in1:  '+in1+'    in2:  '+in2)
				tableRight.empty();
				console.log('결과<br> ' + app.algorithm.selectSort(in1, in2));
				app.component.divAlert('alert-danger').html('결과<br> ' + app.algorithm.selectSort(in1, in2)).appendTo(tableRight);
			});
			$('#selectSort').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
				app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('선택 정렬').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val(), in2 = $('#in2').val();
					tableRight.empty();
					app.component.divAlert('alert-danger').html('결과<br> ' + app.algorithm.selectSort(in1, in2)).appendTo(tableRight);
				});
			});
			$('#bubbleSort').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','버블 정렬(,로 구분)').appendTo(tableRight);
				app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
				app.component.aButton('aButton','btn-success').html('버블 정렬').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val(), in2 = $('#in2').val();
					tableRight.empty();
					app.component.divAlert('alert-success').html('결과<br> ' + app.algorithm.bubbleSort(in1, in2)).appendTo(tableRight);
				});
			});
			$('#insertSort').on('click', function() {
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','삽입 정렬(,로 구분)').appendTo(tableRight);
				app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('삽입 정렬').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val(), in2 = $('#in2').val();
					tableRight.empty();
					app.component.divAlert('alert-warning').html('결과<br> ' + app.algorithm.insertSort(in1, in2)).appendTo(tableRight);
				});
			});
		});
	};
	/* 알고리즘행렬 */
	var matrix = function(){
		var wrapper = app.component.getWrapper();
		$('#matrix').on('click', function() {
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			tableLeft.append(app.algorithm.MATRIX_MENU);
			var tableRight = $('#tableRight');
			tableRight.empty();
			app.component.divAlert('alert-warning').html(app.algorithm.matrix1()).appendTo(tableRight);
		});
	};
	/* 알고리즘수학 */
	var math = function(){
		var wrapper = app.component.getWrapper();
		$('#math').on('click', function() {
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
			var tableRight = $('#tableRight');
			app.component.inputText('inputText').attr('placeholder','수학').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(app.component.wrapper).on('click', function() {
				tableRight.empty();
				aSeries(app.component.inputText('inputText').val());
			});
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
		/* Matrix */
		matrix : matrix,
		matrix1 : matrix1,
		matrix2 : matrix2,
		matrix3 : matrix3,
		matrix4 : matrix4,
		matrix5 : matrix5,
		matrix6 : matrix6,
		matrix7 : matrix7,
		matrix8 : matrix8,
		/* Math */
		math : math,
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
			var tableLeft = $('#tableLeft');
			tableLeft.empty();
			var tableRight = $('#tableRight');
			tableRight.empty();
			tableLeft.append(app.oop.OOP_MENU);
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
app.algorithm.SERIES_MENU = '<ul class="list-group"><li id="aSeries" class="list-group-item"><a href="#">등차수열</a></li><li id="swSeries" class="list-group-item"><a href="#">스위치수열</a></li><li id="dSeries" class="list-group-item"><a href="#">계차수열</a></li><li id="factorial" class="list-group-item"><a href="#">팩토리얼</a></li><li id="fibonacci" class="list-group-item"><a href="#">피보나치수열</a></li></ul>';
app.algorithm.ARR_MENU = '<ul class="list-group"><li id="selectSort" class="list-group-item"><a href="#">선택정렬</a></li><li id="bubbleSort" class="list-group-item"><a href="#">버블정렬</a></li><li id="insertSort" class="list-group-item"><a href="#">삽입정렬</a></li></ul>';
app.algorithm.MATRIX_MENU = '<ul class="list-group"><li id="matrix1" class="list-group-item"><a href="#">직각 삼각형</a></li><li id="matrix2" class="list-group-item"><a href="#">직각삼각형(뒤로부터)</a></li><li id="matrix3" class="list-group-item"><a href="#">ㄹ자 채우기</a></li><li id="matrix4" class="list-group-item"><a href="#">◆</a></li><li id="matrix5" class="list-group-item"><a href="#">◇</a></li><li id="matrix6" class="list-group-item"><a href="#">모래시계</a></li><li id="matrix7" class="list-group-item"><a href="#">■-◀</a></li><li id="matrix8" class="list-group-item"><a href="#">◀</a></li><li id="matrix9" class="list-group-item"><a href="#">90도 회전</a></li><li id="matrix10" class="list-group-item"><a href="#">달팽이</a></li><li id="matrix11" class="list-group-item"><a href="#">대각선 채우기(▨)</a></li><li id="matrix12" class="list-group-item"><a href="#">대각선 채우기(▧)</a></li><li id="matrix13" class="list-group-item"><a href="#">마방진</a></li></ul>';
app.oop.OOP_MENU = '<ul class="list-group"><li id="encap1" class="list-group-item"><a href="#">캡슐화</a></li><li id="inher1" class="list-group-item"><a href="#">상속성</a></li><li id="polym1" class="list-group-item"><a href="#">다형성</a></li></ul>';


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