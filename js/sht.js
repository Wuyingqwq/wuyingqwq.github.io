function onMath(){
    document.getElementById('math').style.display = 'block';
    document.getElementById('homebutton').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('other').style.display = 'none';
}


function onOther(){
    document.getElementById('other').style.display = 'block';
    document.getElementById('math').style.display = 'none';
    document.getElementById('home').style.display = 'none';
}

function backHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('other').style.display = 'block';
    document.getElementById('math').style.display = 'none';
    document.getElementById('homebutton').style.display = 'none';
}

