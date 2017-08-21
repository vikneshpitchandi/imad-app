console.log('Loaded!');

//change the main-text div in index.html 

var element=document.getElementById('main-text');

element.innerHTML='new value';

//move the image
var img=document.getElementById('madi');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveright,50);
};