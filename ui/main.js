console.log('Loaded!');
var element=document.getElementById('one');
element.innerHTML='new value';
var img=document.getElementById('two');
img.onClick=function(){
    img.style.marginLeft='300px';
};