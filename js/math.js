function start1() {
	//获取编辑框1,2的内容
	let text1value = document.getElementById("text1").value;
	let text2value = document.getElementById("text2").value;

	//开始计算
	if (wMath.pow(text1value, text2value) == undefined) {
		document.getElementById('h21').innerHTML = "非法数字！";
	} else {
		document.getElementById('h21').innerHTML = "结果为：" + wMath.pow(text1value, text2value);
	}
}


function start6() {
	document.getElementById('h29').innerHTML = "结果为：" + Math.random(); //使用JS中Math这个内置对象的trunc方法来计算并输出结果（弹窗式）
}




function start9() {
	//开始判断
	if (wMath.thisYear() == true) {
		document.getElementById('h211').innerHTML = "今年是闰年！"; //输出结果（弹窗式)
	} else {
		document.getElementById('h211').innerHTML = "今年是平年！"; //输出结果（弹窗式)
	}
}

function start10() {
	//获取编辑框14的内容
	let text14value = document.getElementById("text14").value;

	//开始判断
	if (wMath.year(text14value) == undefined) {
		document.getElementById('h212').innerHTML = "非法数字！";
	} else if (wMath.year(text14value) == true) {
		document.getElementById('h212').innerHTML = "此年份为闰年！"; //输出结果（弹窗式）
	} else {
		document.getElementById('h212').innerHTML = "此年份为平年！"; //输出结果（弹窗式）
	}
}

function start11() {
	//获取编辑框15,16,17,18的内容
	let text15value = document.getElementById("text15").value;
	let text16value = document.getElementById("text16").value;
	let text17value = document.getElementById("text17").value;
	let text18value = document.getElementById("text18").value;

	//开始判断
	if (wMath.fraction(text15value, text16value, text17value, text18value) == undefined) {
		document.getElementById('h213').innerHTML = "非法数字！";
	} else if (wMath.fraction(text15value, text16value, text17value, text18value) == true) {
		document.getElementById('h213').innerHTML = "第一个分数大！"; //输出结果（弹窗式）
	} else {
		document.getElementById('h213').innerHTML = "第二个分数大！"; //输出结果（弹窗式）
	}
}

function start12() {
	//获取编辑框19,20的内容
	let text19value = document.getElementById("text19").value;
	let text20value = document.getElementById("text20").value;

	//开始比较
	if (wMath.randomFromXY(text19value, text20value) == undefined) {
		document.getElementById('h214').innerHTML = "非法数字！";
	} else {
		document.getElementById('h214').innerHTML = "随机数为：" + wMath.randomFromXY(text19value, text20value);
	}
}

function start13() {
	//获取编辑框21,22的内容
	let text21value = document.getElementById("text21").value;
	let text22value = document.getElementById("text22").value;

	//开始比较
	if (wMath.randomFromXYForInteger(text21value, text22value) == undefined) {
		document.getElementById('h215').innerHTML = "非法数字！";
	} else {
		document.getElementById('h215').innerHTML = "随机数为：" + wMath.randomFromXYForInteger(text21value, text22value);
	}
}

function start14() {
	//获取编辑框23,24的内容
	let text23value = document.getElementById("text23").value;
	let text24value = document.getElementById("text24").value;

	//开始比较
	if (wMath.randomFromXYForIntegerincludeXY(text23value, text24value) == undefined) {
		document.getElementById('h216').innerHTML = "非法数字！";
	} else {
		document.getElementById('h216').innerHTML = "随机数为：" + (wMath.randomFromXYForIntegerincludeXY(text23value, text24value));
	}
}





function start19() {
	let text29value = document.getElementById("text29").value;
	let text30value = document.getElementById("text30").value;

	document.getElementById('xsexpression').innerHTML = 'x的表达式为：' + wMath.eq(text29value, text30value)[0];
	document.getElementById('ysexpression').innerHTML = 'y的表达式为：' + wMath.eq(text29value, text30value)[1];
	document.getElementById('xsresult').innerHTML = 'x的解为：' + wMath.eq(text29value, text30value)[2];
	document.getElementById('ysresult').innerHTML = 'y的解为：' + wMath.eq(text29value, text30value)[3];
}

function start20() {
	let text31value = document.getElementById('text31').value;
	//console.log('text == ' + text31value);

	document.getElementById('AMN').innerHTML = '结果为：' + wMath.AMN(text31value);
}

function start21() {
	let text32value = document.getElementById('text32').value;

	document.getElementById('CMMN').innerHTML = '结果为：' + wMath.CMMN(text32value);
}

function start22() {
	let text33value = document.getElementById('text33').value;
	let text34value = document.getElementById('text34').value;

	document.getElementById('AMNO').innerHTML = '结果为：' + wMath.AMNO(text33value, text34value);
}

function start23() {
	let text35value = document.getElementById('text35').value;
	let text36value = document.getElementById('text36').value;

	document.getElementById('CMMNO').innerHTML = '结果为：' + wMath.CMMNO(text35value, text36value);
}