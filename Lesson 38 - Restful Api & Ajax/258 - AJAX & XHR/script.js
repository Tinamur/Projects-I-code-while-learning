
var xhr = new XMLHttpRequest();

xhr.onreadystatechange= function(){
    if (xhr.readyState===4) {
        if (xhr.status === 200){
            console.log(xhr.responseText);
        }else if (xhr.status === 404){
            console.log('Kaynak Bulunamadı');
        }
    }
}

xhr.onprogress = function(){
    console.log('işlem devam ediyor');
}


xhr.open('GET', 'msg.txt',true); //True For async 
xhr.send();


/* 
--------Ready State--------
0: Request not initialized
1: Server conncetion established
2: Request received
3: Processing request
4: Request finished and response is ready


--------   Status   --------

200: OK
403 : Forbidden
404: Not Found
*/