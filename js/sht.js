function onMath(){
    document.getElementById('math').style.display = 'block';
    document.getElementById('getThisTime').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('changelogs').style.display = 'none';
}

function onGetThisTime(){
    document.getElementById('getThisTime').style.display = 'block';
    document.getElementById('math').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('changelogs').style.display = 'none';
}

function onChangelogs(){
    document.getElementById('changelogs').style.display = 'block';
    document.getElementById('math').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('getThisTime').style.display = 'none';
}