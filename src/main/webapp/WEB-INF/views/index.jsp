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
					<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
					<li><a href="#">Link</a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">Dropdown <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">Separated link</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#">One more separated link</a></li>
						</ul></li>
				</ul>
				<form class="navbar-form navbar-left">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a id="hospital" href="#">Hospital<span class="sr-only">(current)</span></a></li>
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
/* variables */
var body = $('body');
var wrapper = $('#wrapper');
var aButton = $('<a id="aButton" href="#" class="btn btn-primary" role="button">aButton</a>');
var bButton = $('<button id="bButton" type="button" class="btn btn-default">bButton</button>');
var inputText = $('<input id="inputText" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
var inputText2 = $('<input id="inputText2" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
var divAlert = $('<div class="alert alert-danger" role="alert">example</div>');
var series = $('#series');
var arr = $('#array');
var matrix = $('#matrix');
var math = $('#math');
var appl = $('#appl');
var table = $('<div style="width:100%"><table style="margin: 0 auto; width:500px; height:300px; border-collapse: collapse; border: 1px solid black;"><tr><td id="tableLeft" style="width:50%; border: 1px solid black;"></td><td id="tableRight"></td></tr></table></div>');
var seriesMenu = $('<ul class="list-group"> ' +
		'<li id="aSeries" class="list-group-item"><a href="#">등차수열</a></li>' +
		'<li id="swSeries" class="list-group-item"><a href="#">스위치수열</a></li>' +
		'<li id="dSeries" class="list-group-item"><a href="#">계차수열</a></li>' +
		'<li id="factorial" class="list-group-item"><a href="#">팩토리얼</a></li>' +
		'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열</a></li>' +
		'</ul>');
var arrMenu = $('<ul class="list-group"> ' +
		'<li id="selectSort" class="list-group-item"><a href="#">선택정렬</a></li>' +
		'<li id="bubbleSort" class="list-group-item"><a href="#">버블정렬</a></li>' +
		'<li id="insertSort" class="list-group-item"><a href="#">삽입정렬</a></li>' +
		'</ul>');
/* body */
wrapper.empty();
inputText.attr('placeholder','이 름').appendTo(wrapper);
aButton.html('CLICK').appendTo(wrapper).on('click', function() {
	var name = inputText.val();
	wrapper.empty();
	divAlert.html('Hello ' + name + '!!').appendTo(wrapper);
});
/* Algorithm DDL 수열 */
series.on('click', function() {
	wrapper.empty();
	wrapper.append(table);
	seriesMenu.appendTo($('#tableLeft'));
	var tableRight = $('#tableRight');	
	tableRight.empty();
	inputText.attr('placeholder','등차수열').appendTo(tableRight);
	aButton.html('등차수열').appendTo(tableRight).on('click', function() {
		tableRight.empty();
		aSeries(inputText.val(), tableRight);
	});
	$('#aSeries').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','등차수열').appendTo(tableRight);
		aButton.html('등차수열').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			aSeries(inputText.val(), tableRight);
		});
	});
	$('#swSeries').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','스위치').appendTo(tableRight);
		aButton.html('스위치').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			swSeries(inputText.val(), tableRight);
		});
	});
	$('#dSeries').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','계차수열').appendTo(tableRight);
		aButton.html('계차수열').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			dSeries(inputText.val(), tableRight);
		});
	});
	$('#factorial').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','팩토리얼').appendTo(tableRight);
		aButton.html('팩토리얼').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			factorial(inputText.val(), tableRight);
		});
	});
	$('#fibonacci').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','피보나치').appendTo(tableRight);
		aButton.html('피보나치').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			fibonacci(inputText.val(), tableRight);
		});
	});
});
arr.on('click', function() {
	wrapper.empty();
	wrapper.append(table);
	arrMenu.appendTo($('#tableLeft'));
	var tableRight = $('#tableRight');	
	tableRight.empty();
	inputText.attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
	inputText2.attr('placeholder','회전수').appendTo(tableRight);
	aButton.html('선택 정렬').appendTo(tableRight).on('click', function() {
		tableRight.empty();
		insertSort(inputText.val(), inputText2.val(), tableRight);
	});
	$('#selectSort').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','선택 정렬(,로 구분)').appendTo(tableRight);
		inputText2.attr('placeholder','회전수').appendTo(tableRight);
		aButton.html('선택 정렬').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			insertSort(inputText.val(), inputText2.val(), tableRight);
		});
	});
	$('#bubbleSort').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','버블 정렬(,로 구분)').appendTo(tableRight);
		inputText2.attr('placeholder','회전수').appendTo(tableRight);
		aButton.html('버블 정렬').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			insertSort(inputText.val(), inputText2.val(), tableRight);
		});
	});
	$('#insertSort').on('click', function() {
		var tableRight = $('#tableRight');	
		tableRight.empty();
		inputText.attr('placeholder','삽입 정렬(,로 구분)').appendTo(tableRight);
		inputText2.attr('placeholder','회전수').appendTo(tableRight);
		aButton.html('삽입 정렬').appendTo(tableRight).on('click', function() {
			tableRight.empty();
			insertSort(inputText.val(), inputText2.val(), tableRight);
		});
	});
});
matrix.on('click', function() {
	wrapper.empty();
	var tableRight = $('#tableRight');
	inputText.attr('placeholder','행렬').appendTo(tableRight);
	aButton.html('CLICK').appendTo(wrapper).on('click', function() {
		tableRight.empty();
		swSeries(inputText.val(), tableRight);
	});
});
math.on('click', function() {
	wrapper.empty();
	var tableRight = $('#tableRight');
	inputText.attr('placeholder','수학').appendTo(tableRight);
	aButton.html('CLICK').appendTo(wrapper).on('click', function() {
		tableRight.empty();
		aSeries(inputText.val());
	});
});
appl.on('click', function() {
	wrapper.empty();
	var tableRight = $('#tableRight');
	inputText.attr('placeholder','어플').appendTo(tableRight);
	aButton.html('CLICK').appendTo(wrapper).on('click', function() {
		tableRight.empty();
		aSeries(inputText.val());
	});
});
/* Algorithm DDL 수열 function */
function aSeries(limit, tableRight) {
	var sum = 0;
	for(i=1; i<=limit; i++) {
		sum+=i;
	}
	divAlert.html('결과:' + sum).appendTo(tableRight);
}
function swSeries(limit, tableRight) {
	var sum = 0;
	var sw = 1;
	for(i=1; i<=limit; i++) {
		sum += sw * i;
		sw *= -1;
	}
	divAlert.html('결과:' + sum).appendTo(tableRight);
}
function dSeries(limit, tableRight) {
	var sum = 0;
	var a = 1;
	for(i=0; i<=limit; i++) {
		a += i;
		sum += a;
	}
	divAlert.html('결과:' + sum).appendTo(tableRight);
}
function factorial(limit, tableRight) {
	var sum = 0;
	for(i=1; i<=limit; i++) {
		var mul = 1;
		for(j=1; j<=i; j++) {
			mul *= j;
		}
		sum += mul; 
	}
	divAlert.html('결과:' + sum).appendTo(tableRight);
}
function fibonacci(limit, tableRight) {
	var sum = 2;
	var a = 1;
	var b = 1;
	var c = 0;
	for(i=1; i<=limit-2; i++) {
		c = a+b;
		sum += c;
		a = b;
		b = c;
	}
	divAlert.html('결과:' + sum).appendTo(tableRight);
}
/* Algorithm DDL 배열 function */
function selectSort(limit, cycle, tableRight) {
	var arr = [1];
	var temp = 0;
	var result = "";
	for(i=0; i<10; i++) {
		arr = limit.split(",")[i];
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
	divAlert.html('결과<br> ' + result).appendTo(tableRight);
}
function bubbleSort(limit, cycle, tableRight) {
	var arr = [1];
	var temp = 0;
	var result = "";
	for(i=0; i<10; i++) {
		arr = limit.split(",")[i];
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
	divAlert.html('결과<br> ' + result).appendTo(tableRight);	
}
function insertSort(limit, cycle, tableRight) {
	var arr = [1];
	var temp = 0;
	var result = "";
	for(i=0; i<10; i++) {
		arr = limit.split(",")[i];
	}
	for(i=0; i<cycle-1; i++) {
		for(j=0; j<arr.length-1; j++) {
			for(k=j+1; k<arr.length; k++) {
				if(arr[j]>arr[k]) {
					
				}
			}
		}
	}
	for(i=0; i<=arr.length; i++) {
		result += arr[i] + " ";
	}
	divAlert.html('결과<br> ' + result).appendTo(tableRight);		
}
</script>
</html>