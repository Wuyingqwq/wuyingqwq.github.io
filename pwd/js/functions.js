function num(litter) {
    litter = String(litter);

    //将字母装换为大写
    litter = litter.toUpperCase();

    //判断
    switch (litter) {
        case 'A': {
            return 0;
        }

        case 'B': {
            return 1;
        }

        case 'C': {
            return 2;
        }

        case 'D': {
            return 3;
        }

        case 'E': {
            return 4;
        }

        case 'F': {
            return 5;
        }

        case 'G': {
            return 6;
        }

        case 'H': {
            return 7;
        }

        case 'I': {
            return 8;
        }

        case 'J': {
            return 9;
        }

        case 'K': {
            return 10;
        }

        case 'L': {
            return 11;
        }

        case 'M': {
            return 12;
        }

        case 'N': {
            return 13;
        }

        case 'O': {
            return 14;
        }

        case 'P': {
            return 15;
        }

        case 'Q': {
            return 16;
        }

        case 'R': {
            return 17;
        }

        case 'S': {
            return 18;
        }

        case 'T': {
            return 19;
        }

        case 'U': {
            return 20;
        }

        case 'V': {
            return 21;
        }

        case 'W': {
            return 22;
        }

        case 'X': {
            return 23;
        }

        case 'Y': {
            return 24;
        }

        case 'Z': {
            return 25;
        }

        default: {
            return undefined;
        }
    }
}

function num_sk(litter) {
    litter = String(litter);

    //将字母装换为大写
    litter = litter.toUpperCase();

    //判断
    switch (litter) {
        case 'A': {
            return A;
        }

        case 'B': {
            return B;
        }

        case 'C': {
            return C;
        }

        case 'D': {
            return D;
        }

        case 'E': {
            return E;
        }

        case 'F': {
            return F;
        }

        case 'G': {
            return G;
        }

        case 'H': {
            return H;
        }

        case 'I': {
            return I;
        }

        case 'J': {
            return J;
        }

        case 'K': {
            return K;
        }

        case 'L': {
            return L;
        }

        case 'M': {
            return M;
        }

        case 'N': {
            return N;
        }

        case 'O': {
            return O;
        }

        case 'P': {
            return P;
        }

        case 'Q': {
            return Q;
        }

        case 'R': {
            return R;
        }

        case 'S': {
            return S;
        }

        case 'T': {
            return T;
        }

        case 'U': {
            return U;
        }

        case 'V': {
            return V;
        }

        case 'W': {
            return W;
        }

        case 'X': {
            return X;
        }

        case 'Y': {
            return Y;
        }

        case 'Z': {
            return Z;
        }

        default: {
            return undefined;
        }
    }
}

function get_ct(pt, sk) {
    var pt_litters = pt.replace(/[^a-zA-Z]/g, ''); //获取所有字母
    var pt_length = pt.replace(/[^a-zA-Z]/g, '').length - 1;
    var sk_litters = sk.replace(/[^a-zA-Z]/g, ''); //获取所有字母
    var sk_length = sk.replace(/[^a-zA-Z]/g, '').length - 1;
    var pt_arr = []; //数组
    var result = []; //字符串
    var pt_split = pt.split(''); //分割
    var ct_value = ''

    if (pt_length != sk_length && pt_length > sk_length) {
        //return undefined;
        var sk_arr = sk_litters.split("");
        //console.log(Math.abs(pt_length - sk_length))
        if (Math.ceil(Math.abs(pt_length - sk_length) / sk_length) > 1) { //如果密钥和待处理字母的差别次数大于1的话
            //console.log(Math.ceil(Math.abs(pt_length - sk_length) / (sk_length + 1)))
            //console.log(Math.abs(pt_length - sk_length))
            for (let i = 0; i < Math.abs(pt_length - sk_length); i++) { // 循环相差的次数
                if (Math.floor(i / (sk_length + 1)) >= 1) { //如果循环次数与密钥的字母个数的比大于或等于1
                    if (i == sk_length) { // 如果刚好是第一次的最后一个
                        sk_litters += sk_arr[i - 1]; // 直接加上
                    } else {
                        /*
                        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                        console.log(i)
                        console.log(Math.floor(Math.abs(i - (sk_length + 1)) / (sk_length + 1)))
                        console.log(Math.floor(Math.abs(i - (sk_length + 1)) / (sk_length + 1)) * (sk_length + 1))
                        console.log(sk_arr)*/
                        sk_litters += sk_arr[i - Math.ceil(Math.abs(i - (sk_length + 1)) / (sk_length + 1)) * (sk_length + 1) - 1]; //取循环次数与密钥的差的比的向上取整数，再用循环次数减去
                    }
                } else {
                    sk_litters += sk_arr[i];
                }
            }
        } else {
            for (let i = 0; i < Math.abs(pt_length - sk_length); i++) {
                sk_litters += String(sk_arr[i]);
                //console.log(1)
            }
        }

    }
    sk_length = sk_litters.length - 1;
    //console.log(sk_litters);

    //获取每个字母，并存入数组
    for (var i = 0; i <= pt_length; i++) {
        pt_arr.push(num(pt_litters[i]))
    }

    //转换密文
    for (var sk_nums = 0; sk_nums <= sk_length; sk_nums++) {
        result.push(num_sk(sk_litters[sk_nums])[pt_arr[sk_nums]]); //pt_arr为明文对应的26个英文字母的位置
    }

    //为结果添加空格
    for (var pt_nums = 0; pt_nums <= pt_split.length; pt_nums++) {
        if (pt_split[pt_nums] == ' ') {
            result.splice(pt_nums, 0, ' ');
        }
    }

    //将结果拼接为字符串
    for (var re_nums = 0; re_nums <= result.length; re_nums++) {
        if (result[re_nums] != undefined) {
            ct_value += result[re_nums];
        }
    }

    return ct_value;
}

function get_pt(ct, sk) {
    var ct_litters = ct.replace(/[^a-zA-Z]/g, ''); //获取所有字母
    var ct_length = ct.replace(/[^a-zA-Z]/g, '').length - 1;
    var sk_litters = sk.replace(/[^a-zA-Z]/g, ''); //获取所有字母
    var sk_length = sk.replace(/[^a-zA-Z]/g, '').length - 1;
    var ct_arr = []; //这个数组里面的内容是密文所对应的明文的索引
    var re_arr = []; //这个数组里面的内容是明文字母
    var ct_pt_split = ct.split('');
    var re_value = ''

    //console.log(ct_litters)
    //console.log(sk_litters.split(""))

    if (ct_length != sk_length && ct_length > sk_length) {
        //return undefined;
        var sk_arr = sk_litters.split("");
        //console.log(Math.abs(ct_length - sk_length))
        if (Math.ceil(Math.abs(ct_length - sk_length) / sk_length) > 1) { //如果密钥和待处理字母的差别次数大于1的话
            //console.log(Math.ceil(Math.abs(ct_length - sk_length) / (sk_length + 1)))
            //console.log(Math.abs(ct_length - sk_length))
            for (let i = 0; i < Math.abs(ct_length - sk_length); i++) { // 循环相差的次数
                if (Math.floor(i / (sk_length + 1)) >= 1) { //如果循环次数与密钥的字母个数的比大于或等于1
                    if (i == sk_length) { // 如果刚好是第一次的最后一个
                        sk_litters += sk_arr[i - 1]; // 直接加上
                    } else {
                        /*
                        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                        console.log(i)
                        console.log(Math.floor(Math.abs(i - (sk_length + 1)) / (sk_length + 1)))
                        console.log(Math.floor(Math.abs(i - (sk_length + 1)) / (sk_length + 1)) * (sk_length + 1))
                        console.log(sk_arr)*/
                        sk_litters += sk_arr[i - Math.ceil(Math.abs(i - (sk_length + 1)) / (sk_length + 1)) * (sk_length + 1) - 1]; //取循环次数与密钥的差的比的向上取整数，再用循环次数减去
                    }
                } else {
                    sk_litters += sk_arr[i];
                }
            }
        } else {
            for (let i = 0; i < Math.abs(ct_length - sk_length); i++) {
                sk_litters += String(sk_arr[i]);
                //console.log(1)
            }
        }

    }
    sk_length = sk_litters.length - 1;

    //将密文转换为明文
    for (var i = 0; i <= ct_length; i++) {
        /*
        console.log(sk_litters[i])
        console.log(num_sk(sk_litters[i]))
        console.log(ct_litters[i])
        */
        ct_arr.push(num_sk(sk_litters[i]).indexOf(ct_litters[i].toUpperCase())) //.toUpperCase()是将字母转换为大写字母
    }

    //console.log(ct_arr)

    //蒋明文字母存入数组中
    for (var ii = 0; ii <= ct_arr.length; ii++) {
        re_arr.push(litters[ct_arr[ii]]);
    }

    //为数组添加空格
    for (var iii = 0; iii <= ct_pt_split.length; iii++) {
        if (ct_pt_split[iii] == ' ') {
            re_arr.splice(iii, 0, ' ');
        }
    }

    //将数组拼接成字符串
    for (var iiii = 0; iiii <= re_arr.length; iiii++) {
        if (re_arr[iiii] == undefined) {

        } else {
            re_value += re_arr[iiii];
        }
    }

    return re_value;

}