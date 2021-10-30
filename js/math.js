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

function start2() {
	//获取编辑框3的内容
	let text3value = document.getElementById("text3").value;

	//开始计算
	if (wMath.abs(text3value) == undefined) {
		document.getElementById('h22').innerHTML = "非法数字！";
	} else {
		document.getElementById('h22').innerHTML = "结果为：" + wMath.abs(text3value); //输出结果（弹窗式）
	}
}

function start3() {
	//获取编辑框4,5的内容
	let text4value = document.getElementById("text4").value;
	let text5value = document.getElementById("text5").value;

	//开始判断
	if (wMath.max(text4value, text5value) == undefined) {
		document.getElementById('h23').innerHTML = "非法数字！";
	} else {
		document.getElementById('h23').innerHTML = "最大值为：" + wMath.max(text4value, text5value) //输出结果（弹窗式）
	}
}



function start4() {
	//获取编辑框6,7的内容
	let text6value = document.getElementById("text6").value;
	let text7value = document.getElementById("text7").value;

	//开始判断
	if (wMath.min(text6value, text7value) == undefined) {
		document.getElementById('h24').innerHTML = "非法数字！";
	} else {
		document.getElementById('h24').innerHTML = "最小值为：" + wMath.min(text6value, text7value); //输出结果（弹窗式）
	}
}

function start5() {
	//获取编辑框8的内容
	let text8value = document.getElementById("text8").value;

	//开始计算
	if (wMath.trunc(text8value) == undefined) {
		document.getElementById('h25').innerHTML = "非法数字！";
	} else {
		document.getElementById('h25').innerHTML = "结果为：" + wMath.trunc(text8value); //输出结果（弹窗式）
	}
}

function start6() {
	document.getElementById('h29').innerHTML = "结果为：" + Math.random(); //使用JS中Math这个内置对象的trunc方法来计算并输出结果（弹窗式）
}

function start7() {
	//获取编辑框9的内容
	let text9value = document.getElementById("text9").value;

	//开始计算
	if (wMath.round(text9value) == undefined) {
		document.getElementById('h28').innerHTML = "非法数字！";
	} else {
		document.getElementById('h28').innerHTML = "结果为：" + wMath.round(text9value); //输出结果（弹窗式）
	}
}

function start8() {
	//获取编辑框10,11,12,13的内容
	let text10value = document.getElementById("text10").value;
	let text11value = document.getElementById("text11").value;
	let text12value = document.getElementById("text12").value;
	let text13value = document.getElementById("text13").value;

	//开始判断
	if (wMath.proportion(text10value, text11value, text12value, text13value) == undefined) {
		document.getElementById('h210').innerHTML = "非法数字！";
	} else if (wMath.proportion(text10value, text11value, text12value, text13value) == true) {
		document.getElementById('h210').innerHTML = "成比例！"; //输出结果（弹窗式）
	} else {
		document.getElementById('h210').innerHTML = "不成比例！"; //输出结果（弹窗式)
	}

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

function start15() {
	//获取编辑框25的内容
	let text25value = document.getElementById("text25").value;

	//开始计算
	if (wMath.ceil(text25value) == undefined) {
		document.getElementById('h26').innerHTML = "非法数字！";
	} else {
		document.getElementById('h26').innerHTML = "结果为：" + wMath.ceil(text25value);
	}
}

function start16() {
	//获取编辑框26的内容
	let text26value = document.getElementById("text26").value;

	//开始计算
	if (wMath.floor(text26value) == undefined) {
		document.getElementById('h27').innerHTML = "非法数字！";
	} else {
		document.getElementById('h27').innerHTML = "结果为：" + wMath.floor(text26value);
	}
}

function start17() {
	//获取编辑框27内容
	let text27value = document.getElementById("text27").value;

	//开始判断
	if (wMath.sign(text27value) == undefined) {
		document.getElementById('h217').innerHTML = "非法数字！";
	} else {
		document.getElementById('h217').innerHTML = "结果为：" + wMath.sign(text27value);
	}
}

function start18() {
	//获取编辑框28内容
	let text28value = document.getElementById("text28").value;

	//开始判断
	if (wMath.oppositeNumber(text28value) == undefined) {
		document.getElementById('h218').innerHTML = "非法数字！";
	} else {
		document.getElementById('h218').innerHTML = "结果为：" + wMath.oppositeNumber(text28value);
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