var button=document.getElementById('counter'); //gets the button id
var counter=0;

button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById('count'); //gets the counts id
    span.innerHTML=counter.toString();
};