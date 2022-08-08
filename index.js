/*
index.js
*/ 

var nums = 1;
var score = 0;
var usedQuestions = []
var randNums = 0;

function finish() {
    alert("你的得分是：" + String(score));

    document.getElementById("menu").style.display = "block";
    document.getElementById("QA").style.display = "none";

    /*
        对数据清零
    */
    nums = 1;
    score = 0;
    usedQuestions = [];
    randNums = 0;
}

function nextLevel() {
    //Debug
    console.log(' ', score, "|", nums)

    //获取单选框
    var radios = document.getElementsByName("AA");

    //清空选择
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = ''
    }

    //获取随机题号
    while (true) {
        var randNum = Math.floor(Math.random() * (questions.length-1)) + 1;
        if (usedQuestions.indexOf(randNum) != -1) {

        } else {
            randNums = randNum;
            break;
        }
    }

    //判断
    if (nums == 11) { //结束
        finish();
        return;
    } else { //下一题
        usedQuestions[nums-1] = randNum;
        var q = questions[randNum];

        nums += 1;
        document.getElementById("Q").innerHTML = "第" + (nums-1) + "题：" + q.Q;
        document.getElementById("A1").innerHTML = q.A1;
        document.getElementById("A2").innerHTML = q.A2;
        document.getElementById("A3").innerHTML = q.A3;
    }
}

function start() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("QA").style.display = "block";

    nextLevel()
}

function finish_one() {
    var radios = document.getElementsByName("AA");
    var check = 0;
    var checked;

    //查看那个是被选中的
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            check = 1;
            checked = radios[i].value;
        }
    }

    //如果啥都没选
    if (check == 0) {
        alert("请做出选择！");
        return;
    }else { //随机题分数
        if (questions[randNums].RA == checked) {
            score += 10;  
        }
        document.getElementById("scoreGot").innerHTML = "得分：" + score;
    }
    nextLevel()
}