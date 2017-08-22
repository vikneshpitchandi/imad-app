var button=document.getElementById('counter'); //gets the button id
var counter=0;

button.onclick=function()
{
    var request=new XMLHttpRequest(); // creates a request object which request for the web page
    
    request.onreadystatechange=function() // access the function if there is any change in request state
    {
        if(request.readyState===XMLHttpRequest.DONE) // if the  request is done     
        {
            if(request.status===200) // if the requset is successful
            {
                var counter=requestText();                            // gets the text which is responding to the webpage web requseted
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
                
            }
        }
        
    };
    //make the request
    request.open('GET','http://vikneshp1996.imad.hasura-app.io/counter',true);
    request.send(null);
    
};