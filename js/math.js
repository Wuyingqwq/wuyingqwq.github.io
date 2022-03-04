function start1() {
	//获取编辑框1,2的内容
	let text1value = wMath_html.getValue("text1");
	let text2value = wMath_html.getValue("text2");

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
	let text14value = wMath_html.getValue("text14");

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
	let text15value = wMath_html.getValue("text15");
	let text16value = wMath_html.getValue("text16");
	let text17value = wMath_html.getValue("text17");
	let text18value = wMath_html.getValue("text18");

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
	let text19value = wMath_html.getValue("text19");
	let text20value = wMath_html.getValue("text20");

	//开始比较
	if (wMath.randomFromXY(text19value, text20value) == undefined) {
		document.getElementById('h214').innerHTML = "非法数字！";
	} else {
		document.getElementById('h214').innerHTML = "随机数为：" + wMath.randomFromXY(text19value, text20value);
	}
}

function start13() {
	//获取编辑框21,22的内容
	let text21value = wMath_html.getValue("text21");
	let text22value = wMath_html.getValue("text22");

	//开始比较
	if (wMath.randomFromXYForInteger(text21value, text22value) == undefined) {
		document.getElementById('h215').innerHTML = "非法数字！";
	} else {
		document.getElementById('h215').innerHTML = "随机数为：" + wMath.randomFromXYForInteger(text21value, text22value);
	}
}

function start14() {
	//获取编辑框23,24的内容
	let text23value = wMath_html.getValue("text23");
	let text24value = wMath_html.getValue("text24");

	//开始比较
	if (wMath.randomFromXYForIntegerincludeXY(text23value, text24value) == undefined) {
		document.getElementById('h216').innerHTML = "非法数字！";
	} else {
		document.getElementById('h216').innerHTML = "随机数为：" + (wMath.randomFromXYForIntegerincludeXY(text23value, text24value));
	}
}





function start19() {
	let text29value = wMath_html.getValue("text29");
	let text30value = wMath_html.getValue("text30");

	document.getElementById('xsexpression').innerHTML = 'x的表达式为：' + wMath.eq(text29value, text30value)[0];
	document.getElementById('ysexpression').innerHTML = 'y的表达式为：' + wMath.eq(text29value, text30value)[1];
	document.getElementById('xsresult').innerHTML = 'x的解为：' + wMath.eq(text29value, text30value)[2];
	document.getElementById('ysresult').innerHTML = 'y的解为：' + wMath.eq(text29value, text30value)[3];
}

function start22() {
	let text33value = wMath_html.getValue('text33');
	let text34value = wMath_html.getValue('text34');
	
	if(wMath.AMNO(text33value, text34value) == undefined){
		document.getElementById('AMNO').innerHTML = "非法数字！"
	}else{
		document.getElementById('AMNO').innerHTML = '结果为：' + wMath.AMNO(text33value, text34value);
	}

	
}

function start23() {
	let text35value = wMath_html.getValue('text35');
	let text36value = wMath_html.getValue('text36');

	if(wMath.CMMNO(text35value, text36value) == undefined){
		document.getElementById('CMMNO').innerHTML = "非法数字！"
	}else{
		document.getElementById('CMMNO').innerHTML = '结果为：' + wMath.CMMNO(text35value, text36value);
	}
}

function start24(){
	let text37value = wMath_html.getValue('text37');

	if(wMath.complementAngle(text37value) == undefined){
		document.getElementById('complementAngle').innerHTML = "非法数字！"
	}else{
		document.getElementById('complementAngle').innerHTML = '结果为：' + wMath.complementAngle(text37value);
	}
}

function start25(){
	let text38value = wMath_html.getValue('text38');

	if(wMath.complementAngle(text38value) == undefined){
		document.getElementById('supplementaryAngle').innerHTML = "非法数字！"
	}else{
		document.getElementById('supplementaryAngle').innerHTML = '结果为：' + wMath.supplementaryAngle(text38value);
	}
}
