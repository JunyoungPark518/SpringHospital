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
	var randomGen = function(){
		var arr=[];
		for(i=0;i<6;i++){
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
			var arr = [{id:'aSeries', txt:'등차수열'},
				{id:'swSeries', txt:'스위치수열'},
				{id:'dSeries', txt:'계차수열'},
				{id:'factorial', txt:'팩토리얼'},
				{id:'fibonacci', txt:'피보나치'}];
			var str = '';
			$.each(arr, function(i,j){
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
				var arr = randomGen();
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.selectSort(arr, i), 'default'));
				}
			});
			$('#bubbleSort').on('click', function(){
				var arr = randomGen();
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.bubbleSort(arr, i), 'default'));
				}
			});
			$('#insertSort').on('click', function(){
				var arr = randomGen();
				tableRight.html('<span><h2 style="color: red; ">기준</h2></span>'+app.component.horList(arr, 'default'));
				for(i=1;i<6;i++) {
					tableRight.append('<br/>'+i+'회전');
					tableRight.append(app.component.horList(app.algorithm.insertSort(arr, i), 'default'));
				}
			});
			$('#ranking').on('click', function(){
				var arr = randomGen();
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
				{id:'matrix1', txt:'직각 삼각형'},
				{id:'matrix2', txt:'직각삼각형(뒤로부터)'},
				{id:'matrix3', txt:'ㄹ자 채우기'},
				{id:'matrix4', txt:'◆'},
				{id:'matrix5', txt:'◇'},
				{id:'matrix6', txt:'모래시계'},
				{id:'matrix7', txt:'■-◀'},
				{id:'matrix8', txt:'◀'},
				{id:'matrix9', txt:'90도 회전'},
				{id:'matrix10', txt:'달팽이'},
				{id:'matrix11', txt:'대각선 채우기(▨)'},
				{id:'matrix12', txt:'대각선 채우기(▧)'},
				{id:'matrix13', txt:'마방진'},
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
		ranking : ranking,
		binSearch : binSearch,
		merge : merge,
		stack : stack,
		randomGen : randomGen,
		horizontalTable : horizontalTable,
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