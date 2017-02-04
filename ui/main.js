console.log('Loaded!');

var img=document.getElementById('two');
var moveright=0;
function moveRight(){
    moveright+=10;
    img.style.marginLeft=moveright+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    
};