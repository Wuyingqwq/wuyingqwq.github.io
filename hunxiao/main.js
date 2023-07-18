function replace_jie(str) {
    switch (str) {
        case "Q":
            return '1'
        case "W":
            return '2'
        case "E":
            return '3'
        case "R":
            return '4'
        case "T":
            return '5'
        case "Y":
            return '6'
        case "U":
            return '7'
        case "I":
            return '8'
        case "O":
            return '9'
        case "P":
            return '0'
        case '1':
            return "Q"
        case '2':
            return "W"
        case '3':
            return "E"
        case '4':
            return "R"
        case '5':
            return "T"
        case '6':
            return "Y"
        case '7':
            return "U"
        case '8':
            return "I"
        case '9':
            return "O"
        case '0':
            return "P"
        case "~":
            return "A"
        case "@":
            return "S"
        case "#":
            return "D"
        case "$":
            return "F"
        case "%":
            return "G"
        case "&":
            return "H"
        case "*":
            return "J"
        case "(":
            return "K"
        case "（":
            return "K"
        case ")":
            return "L"
        case "）":
            return "L"
        case "'":
            return "Z"
        case "‘":
            return "Z"
        case "/":
            return "X"
        case "-":
            return "C"
        case "_":
            return "V"
        case ":":
            return "B"
        case "：":
            return 'B'
        case ";":
            return "N"
        case "；":
            return "N"
        case "、":
            return "M"
        case "、":
            return "M"
        case " ":
            return " "
        default:
            return "ERR"
        case "+":
            return "/"
        case "=":
            return ":"
        case "[":
            return "."
        case ">":
            return "?"
        case "|":
            return "@"
    }
}

function replace_jia(str) {
    switch (str) {
        case '1':
            return "Q"
        case '2':
            return "W"
        case '3':
            return "E"
        case '4':
            return "R"
        case '5':
            return "T"
        case '6':
            return "Y"
        case '7':
            return "U"
        case '8':
            return "I"
        case '9':
            return "O"
        case '0':
            return "P"
        case "Q":
            return '1'
        case "W":
            return '2'
        case "E":
            return '3'
        case "R":
            return '4'
        case "T":
            return '5'
        case "Y":
            return '6'
        case "U":
            return '7'
        case "I":
            return '8'
        case "O":
            return '9'
        case "P":
            return '0'
        case "A":
            return "~"
        case "S":
            return "@"
        case "D":
            return "#"
        case "F":
            return "$"
        case "G":
            return "%"
        case "H":
            return "&"
        case "J":
            return "*"
        case "K":
            return "（"
        case "L":
            return "）"
        case "Z":
            return "'"
        case "X":
            return "/"
        case "C":
            return "-"
        case "V":
            return "_"
        case "B":
            return "："
        case "N":
            return "；"
        case "M":
            return "、"
        case " ":
            return " "
        case "/":
            return "+"
        case ":":
            return "="
        case ".":
            return "["
        case "?":
            return ">"
        case "@":
            return "|"
        default:
            return "ERR"

    }
}

function jia() {
    var str = document.getElementById("input").value;
    var list = str.split("")
    var result = '';
    var isNum = 0;
    for (let i = 0; i < list.length; i++) {
        //console.log(String(list[i]).toUpperCase())
        //console.log(replace_jia(String(list[i]).toUpperCase()))
        if (list[i] == list[i].toLocaleUpperCase() && isNaN(Number(list[i]))) {
            //console.log(1)
            //console.log(replace_jia(String(list[i + 1]).toUpperCase()))
            //console.log(replace_jia(String(list[i])))
            list[i] = "?" + replace_jia(String(list[i])); //将大写字母前加上?做辨别
            result += list[i];
            //i += 1;
        } else {
            if (isNaN(Number(list[i]))) {
                list[i] = replace_jia(String(list[i]).toUpperCase()).toLowerCase();
                result += list[i]
            } else {
                //console.log(replace_jia(list[i]))
                isNum = 1;
                list[i] = replace_jia(list[i]);
                result += list[i]
            }

        }
        //list[i] = replace_jia(String(list[i]).toUpperCase());
        //result += list[i];
    }
    //console.log(result);
    //  
    document.getElementById("h2").innerHTML = result;
}

function jie() {
    var str = document.getElementById("input").value;
    var list = str.split("")
    var result = '';
    for (let i = 0; i < list.length; i++) {
        //console.log(String(list[i]).toUpperCase())
        //console.log(replace_jia(String(list[i]).toUpperCase()))
        if (list[i] == "?") {
            list[i + 1] = replace_jie(String(list[i + 1]).toUpperCase());
            result += list[i + 1];
            i += 1;
            //continue
        } else {
            //console.log(replace_jie(String(list[i])))
            list[i] = replace_jie(String(list[i]).toUpperCase()).toLowerCase();
            result += list[i]
        }

    }
    //console.log(result)
    document.getElementById("h2").innerHTML = result;
}