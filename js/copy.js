function copyDownloadLink(){
    var Url2 = document.getElementById("Download");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}

function copyGithubLink(){
    var Url2 = document.getElementById("Github");
    Url2.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
}