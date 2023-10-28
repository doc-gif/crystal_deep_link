function load(_url){
    let xhr;
    xhr = new XMLHttpRequest();
    xhr.open("HEAD", _url,false);
    xhr.send(null);
    return xhr.status;
}