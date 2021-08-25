export function random(max,min){
    max = +max;
    min = +min

    if(isNaN(max) || isNaN(min)){
        alert(msg);
    }else{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
}