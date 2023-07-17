function start_get_pt(){
    var pt = document.getElementById('plainText').value;
    var sk = document.getElementById('secretKey').value;
    if(get_pt(pt,sk) == '' || get_pt(pt,sk) == undefined){
        document.getElementById('result').innerHTML = '请输入正确的内容！';
    }else{
        document.getElementById('result').innerHTML = '结果：' + get_pt(pt,sk); 
    }
    
}

function start_get_ct(){
    var pt = document.getElementById('plainText').value;
    var sk = document.getElementById('secretKey').value;
    if(get_ct(pt,sk) == '' || get_ct(pt,sk) == undefined){
        document.getElementById('result').innerHTML = '请输入正确的内容！';
    }else{
        document.getElementById('result').innerHTML = '结果：' + get_ct(pt,sk); 
    }
}

