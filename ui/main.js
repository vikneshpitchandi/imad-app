console.log('Loaded!');

//change the main-text div in index.html 

var element=document.getElementById('main-text');

element.innerHTML='new value';

//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveright()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveright,50);
};