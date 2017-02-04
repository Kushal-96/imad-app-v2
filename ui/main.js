var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(req.readyState===XMLHttpRequest.DONE){
            if(req.status===200){
                var counter=req.responseText;
                var span=document.getElementById('qw');
                span.innerHTML=counter.toString();
            }
        }
    }
    
  req.open('GET','http://kushal-96.imad.hasura-app.io/counter',true);
  reqt.send(null);
};