var button=document.getElementById('counter');

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
    };
    
  req.open('GET','http://kushal-96.imad.hasura-app.io/counter',true);
  req.send();
};
var but=document.getElementById('submit');
but.onclick=function(){
    var rq=new XMLHttpRequest();
    rq.onreadystatechange=function(){
        if(rq.readyState===XMLHttpRequest.DONE && rq.status===200){
            var name=rq.responseText;
            name=JSON.parse('name');
            var l=document.getElementById('list');
            var st='';
            for(var i=0;i<l.length;i++){
                st+='<li>'+l[i]+'</li>';
                
            }
            var qw=document.getElementById('list');
            qw.innerHTML=qw;
            
        }
    };

    var nameInp=document.getElementById('name');
    var name=nameInp.value;
    request.open(GET,"www.")
};