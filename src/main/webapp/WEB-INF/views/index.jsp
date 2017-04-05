<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>Hello</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
					aria-expanded="false">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Brand</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Hospital <span class="sr-only">(current)</span></a></li>
					<li><a href="#">Link</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OOP <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a id="encap" href="#">Encapsulation</a></li>
							<li role="separator" class="divider"></li>
							<li><a id="inher" href="#">Inheritance</a></li>
							<li role="separator" class="divider"></li>
							<li><a id="polym" href="#">Polymorphism</a></li>
						</ul></li>
				</ul>
				<form class="navbar-form navbar-left">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a id="hospital" href="#">Hi!!<span class="sr-only">(current)</span></a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"	aria-expanded="false">Algorithm <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a id="series" href="#">Series</a></li>
							<li><a id="array" href="#">Array</a></li>
							<li><a id="matrix" href="#">Matrix</a></li>
							<li><a id="math" href="#">Math</a></li>
							<li><a id="appl" href="#">Application</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
	<div id="wrapper">
	<div></div>
		<button type="button" class="btn btn-default">CLICK ME</button>
	</div>
</body>
<script>
/* Application Namespace */
var app = app || {};
app.context = (function(){
	
})();
app.component = (function(){
	return {
		body : $('body'),
		wrapper : $('#wrapper'),
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
		seriesMenu : function(){
			return $('<ul class="list-group"> ' +
					'<li id="aSeries" class="list-group-item"><a href="#">등차수열</a></li>' +
					'<li id="swSeries" class="list-group-item"><a href="#">스위치수열</a></li>' +
					'<li id="dSeries" class="list-group-item"><a href="#">계차수열</a></li>' +
					'<li id="factorial" class="list-group-item"><a href="#">팩토리얼</a></li>' +
					'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열</a></li>' +
					'</ul>');
		},
		arrMenu : function() {
			return $('<ul class="list-group"> ' +
					'<li id="selectSort" class="list-group-item"><a href="#">선택정렬</a></li>' +
					'<li id="bubbleSort" class="list-group-item"><a href="#">버블정렬</a></li>' +
					'<li id="insertSort" class="list-group-item"><a href="#">삽입정렬</a></li>' +
					'</ul>');
		},
		oopMenu : function() {
			return $('<ul class="list-group"> ' +
					'<li id="encap1" class="list-group-item"><a href="#">캡슐화</a></li>' +
					'<li id="inher1" class="list-group-item"><a href="#">상속성</a></li>' +
					'<li id="polym1" class="list-group-item"><a href="#">다형성</a></li>' +
					'</ul>');
		}
	};
})();
/* Algorithm Method */
app.algorithm = (function(){
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
		for(i=0; i<10; i++) {
			arr = input.split(",")[i]*1;
		}
		for(j=0; j<cycle-1; j++) {
			for(k=j+1; k<arr.length; k++) {
				if(arr[j]>arr[k]) {
					temp = arr[j];
					arr[j] = arr[k];
					arr[k] = temp;
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
		for(i=0; i<10; i++) {
			arr = input.split(",")[i]*1;
		}
		for(i=0; i<cycle-1; i++) {
			for(j=0;j<arr.length-1;j++){
				if(arr[j]>arr[j+1]){
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = arr[j];
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
		for(i=0; i<10; i++) {
			arr = input.split(",")[i]*1;
		}
		for (i = 1; i < 10; i++) {
			for (k = 0; k <= i; k++) {
				if (arr[i] < arr[k]) {
					temp = arr[i];
					arr[i] = arr[k];
					arr[k] = temp;
				}
			}
		}
		for(i=0; i<=arr.length; i++) {
			result += arr[i] + " ";
		}
		return result;
	};
	/* Algorithm View */
	return {
		aSeries : aSeries,
		swSeries : swSeries,
		dSeries : dSeries,
		factorial : factorial,
		fibonacci : fibonacci,
		selectSort : selectSort,
		bubbleSort : bubbleSort,
		insertSort : insertSort,
		series : function(){
			$('#series').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				tableLeft.append(app.component.seriesMenu);
				var tableRight = $('#tableRight');	
				$('#tableRight').empty();
			    app.component.inputText('in1').attr('placeholder', '시작값,끝값,공차 입력').appendTo($('#tableRight'));
			    app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo($('#tableRight')).on('click', function() {
			       	var in1 = $('#in1').val()+"";
			    	tableRight.empty();
			    	app.component.divAlert('alert-danger').html(app.algorithm.aSeries(in1)).appendTo(tableRight);
			    });
				$('#aSeries').on('click',function() {
			        $('#tableRight').empty();
			        app.component.inputText('in1').attr('placeholder', '시작값,끝값,공차 입력').appendTo($('#tableRight'));
			        app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo($('#tableRight')).on('click', function() {
			        	var in1 = $('#in1').val()+"";
				    	tableRight.empty();
				        app.component.divAlert('alert-danger').html(app.algorithm.aSeries(in1)).appendTo(tableRight);
			        });
			    });
				$('#swSeries').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','스위치').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('스위치').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과:' + app.algorithm.swSeries(in1)).appendTo(tableRight);
					});
				});
				$('#dSeries').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','계차수열').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('계차수열').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과:' + app.algorithm.dSeries(in1)).appendTo(tableRight);
					});
				});
				$('#factorial').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','팩토리얼').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('팩토리얼').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과:' + app.algorithm.factorial(in1)).appendTo(tableRight);
					});
				});
				$('#fibonacci').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','피보나치').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('피보나치').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과:' + app.algorithm.fibonacci(in1)).appendTo(tableRight);
					});
				});
			});
		},
		array : function(){
			$('#array').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				tableLeft.append(app.component.arrMenu);
				var tableRight = $('#tableRight');	
				tableRight.empty();
				app.component.inputText('in1').attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
				app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('선택 정렬').appendTo(tableRight).on('click', function() {
					var in1 = $('#in1').val(), in2 = $('#in2').val();
					tableRight.empty();
					app.component.divAlert('alert-danger').html('결과<br> ' + selectSort(in1, in2)).appendTo(tableRight);
				});
				$('#selectSort').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
					app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('선택 정렬').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val(), in2 = $('#in2').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과<br> ' + selectSort(in1, in2)).appendTo(tableRight);
					});
				});
				$('#bubbleSort').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','버블 정렬(,로 구분)').appendTo(tableRight);
					app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('버블 정렬').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val(), in2 = $('#in2').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과<br> ' + bubbleSort(in1, in2)).appendTo(tableRight);
					});
				});
				$('#insertSort').on('click', function() {
					var tableRight = $('#tableRight');	
					tableRight.empty();
					app.component.inputText('in1').attr('placeholder','삽입 정렬(,로 구분)').appendTo(tableRight);
					app.component.inputText('in2').attr('placeholder','회전수').appendTo(tableRight);
					app.component.aButton('aButton','btn-primary').html('삽입 정렬').appendTo(tableRight).on('click', function() {
						var in1 = $('#in1').val(), in2 = $('#in2').val();
						tableRight.empty();
						app.component.divAlert('alert-danger').html('결과<br> ' + insertSort(in1, in2)).appendTo(tableRight);
					});
				});
			});
		},
		matrix : function(){
			$('#matrix').on('click', function() {
				app.component.wrapper.empty();
				var tableRight = $('#tableRight');
				app.component.inputText('inputText').attr('placeholder','행렬').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(app.component.wrapper).on('click', function() {
					tableRight.empty();
					swSeries(app.component.inputText('inputText').val());
				});
			});
		},
		math : function(){
			$('#math').on('click', function() {
				app.component.wrapper.empty();
				var tableRight = $('#tableRight');
				app.component.inputText('inputText').attr('placeholder','수학').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(app.component.wrapper).on('click', function() {
					tableRight.empty();
					aSeries(app.component.inputText('inputText').val());
				});
			});
		},
		appl : function(){
			$('#appl').on('click', function() {
				app.component.wrapper.empty();
				var tableRight = $('#tableRight');
				app.component.inputText('inputText').attr('placeholder','어플').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(app.component.wrapper).on('click', function() {
					tableRight.empty();
					aSeries(app.component.inputText('inputText').val());
				});
			});
		}
	};
})();
/* OOP Method */
app.oop = (function(){
	return {
		encap : function() {
			$('#encap').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
				tableLeft.append(app.component.oopMenu);
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
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
				app.component.oopMenu.appendTo(tableLeft);
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
		},
		inher : function() {
			$('#inher').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
			});
			$('#inher1').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
			});
		},
		polym : function() {
			$('#polym').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
			});
			$('#polym1').on('click', function() {
				app.component.wrapper.empty();
				app.component.wrapper.append(table);
				var tableLeft = $('#tableLeft');
				tableLeft.empty();
				var tableRight = $('#tableRight');
				tableRight.empty();
			});
		}
	};
})();

/* variables */
var table = $('<div style="width:100%"><table style="margin: 0 auto; width:500px; height:300px; border-collapse: collapse; border: 1px solid black;"><tr><td id="tableLeft" style="width:50%; border: 1px solid black;"></td><td id="tableRight"></td></tr></table></div>');
/* body */
app.component.wrapper.empty();
app.component.wrapper.append(table);
var tableLeft = $('#tableLeft');
app.component.inputText('inputText').attr('placeholder','이 름').appendTo(tableLeft);
app.component.aButton('aButton','btn-primary').html('CLICK').appendTo(tableLeft).on('click', function() {
	var name = app.component.inputText('inputText').val();
	var tableRight = $('#tableRight');
	tableRight.empty();
	app.component.divAlert('alert-danger').html('Hello ' + name + '!!').appendTo(tableRight);
});
app.algorithm.series();
app.algorithm.array();
app.algorithm.matrix();
app.algorithm.math();
app.algorithm.appl();
app.oop.encap();
app.oop.inher();
app.oop.polym();

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

</script>
</html>