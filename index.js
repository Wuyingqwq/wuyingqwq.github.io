import { random } from "./utils/random.js";

var s = 10000000000000;

var cs1 = 0;

var cs2 = 0;

var cs3 = 0;

var cs4 = 0;

var cs5 = 0;

var cs6 = 0;

var cs7 = 0;

var cs8 = 0;

var cs9 = 0;

var cs10 = 0;

for(var i = 1;i <= s;i++){
    var nums = random(1,10);

    if(nums == 1){
        cs1++;
        
    }

    if(nums == 2){
        cs2++;
        
    }

    if(nums == 3){
        cs3++;
        
    }

    if(nums == 4){
        cs4++;
        
    }

    if(nums == 5){
        cs5++;
        
    }

    if(nums == 6){
        cs6++;
        
    }

    if(nums == 7){
        cs7++;
        
    }

    if(nums == 8){
        cs8++;
        
    }

    if(nums == 9){
        cs9++;
        
    }

    if(nums == 10){
        cs10++;
        
    }

    console.log("第" + i + "次随机已完成！随机数为：" + nums);
    console.log("=========================================");

    if(i == s){
        var bf1 = cs1 / s * 100;
        var bf2 = cs2 / s * 100;
        var bf3 = cs3 / s * 100;
        var bf4 = cs4 / s * 100;
        var bf5 = cs5 / s * 100;
        var bf6 = cs6 / s * 100;
        var bf7 = cs7 / s * 100;
        var bf8 = cs8 / s * 100;
        var bf9 = cs9 / s * 100;
        var bf10 = cs10 / s * 100;

        bf1 = Math.round(bf1);
        bf2 = Math.round(bf2);
        bf3 = Math.round(bf3);
        bf4 = Math.round(bf4);
        bf5 = Math.round(bf5);
        bf6 = Math.round(bf6);
        bf7 = Math.round(bf7);
        bf8 = Math.round(bf8);
        bf9 = Math.round(bf9);
        bf10 = Math.round(bf10);

        console.log("随机已结束！总随机次数为：" + s + "，其中出现1的次数为：" + cs1 + "，出现2的次数为：" + cs2 + "，出现3的次数为：" + cs3 + "，出现4的次数为：" + cs4 + "，出现5的次数为：" + cs5 + "，出现6的次数为：" + cs6 + "，出现7的次数为：" + cs7 + "，出现8的次数为：" + cs8 + "，出现9的次数为：" + cs9 + "，出现10的次数为：" + cs10 + "。");
        console.log("==========================================")
        console.log("出现1的概率为：" + bf1 + "%" + "，出现2的概率为：" + bf2 + "%" + "，出现3的概率为：" + bf3 + "%" + "，出现4的概率为：" + bf4 + "%" + "，出现5的概率为：" + bf5 + "%" + "，出现6的概率为：" + bf6 + "%" + "，出现7的概率为：" + bf7 + "%" + "，出现8的概率为：" + bf8 + "%" + "，出现9的概率为：" + bf9 + "%" + "，出现10的概率为：" + bf10 + "%" + "。")
    }else{
        
    }
    
}

