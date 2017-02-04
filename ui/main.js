console.log('Loaded!');
var element=document.getElementById('one');
element.innerHTML='new value';
var img=document.getElementById('two');
img.onclick=function(){
    img.style.marginLeft='100px';
};