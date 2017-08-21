//in javascript everything is an object .variables are also object which contain object(i.e)variable which contain the value's

var express = require('express');//here express is an object(or)variable which contains the function which calls the javascripts defult express function which is used to respond to the client request
var morgan = require('morgan'); //here morgan function is a default function which controls the input and output log
var path = require('path');//here path is a default function which reads the path section in url

var app = express();
app.use(morgan('combined'));

//In the code given below articles is an object which contain other objects that contain the objects which has the values to be passed 
var articles={
   'article-one': {
    title:'Article one',
    heading:'Article one',
    date:'21-8-2017',
    content:`<p> This is the content of the articel1 web page.This is the content of the articel1 web page.
                This is the content of the articel1 web page.This is the content of the articel1 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel1 web page.
                This is the content of the articel1 web page.This is the content of the articel1 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel1 web page.
                This is the content of the articel1 web page.This is the content of the articel1 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel1 web page.
                This is the content of the articel1 web page.This is the content of the articel1 web page.
            </p>`
    },
   'article-two':{
    title:'Article two',
    heading:'Article two',
    date:'21-7-2017',
    content:`<p> This is the content of the articel1 web page.This is the content of the articel2 web page.
                This is the content of the articel1 web page.This is the content of the articel2 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel2 web page.
                This is the content of the articel1 web page.This is the content of the articel2 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel2 web page.
                This is the content of the articel1 web page.This is the content of the articel2 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel2 web page.
                This is the content of the articel1 web page.This is the content of the articel2 web page.
            </p>`
    },
    'article-three':{
    title:'Article three',
    heading:'Article three',
    date:'21-6-2017',
    content:`<p> This is the content of the articel1 web page.This is the content of the articel3 web page.
                This is the content of the articel1 web page.This is the content of the articel3 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel3 web page.
                This is the content of the articel1 web page.This is the content of the articel3 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel3 web page.
                This is the content of the articel1 web page.This is the content of the articel3 web page.
            </p>
            <p> This is the content of the articel1 web page.This is the content of the articel3 web page.
                This is the content of the articel1 web page.This is the content of the articel3 web page.
            </p>`
    },
    
};

function createtemplate(data) // createtemplate is a function which is to be called when a path is searched by the user
{
 var title=data.title;
 var date=data.date;
 var heading=data.content;
 var content=data.content;
 //htmltemplate is a variable which contains the html code for which contents are accessed by passing argument to createtemplate(data) function
 var htmltemplate=`                                   
<html>
<head>
    <title> ${title}</title>
    <meta name='viewport' content="width=device=width ,initial-scale=1"/>
    <link href="/ui/style.css"  rel="stylesheet"/>
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <h3>${heading}</h3>
        <div>
         ${date} 
        </div>
        <div>
           ${content}
        </div>
       </div>    
    </body>
</html>
 `;
 return htmltemplate;
}
app.get('/:articleName',function(reqq,res)   // /articleName refers to the html,css or any any type of file assigned to it .But /:articleName refers to the value of articleName
{     
    var articleName=req.params.articleName; // the code which extracts the vlue from articleName
    res.send(createtemplate(articles[articleName])); //sends apage which is provided by the return value of createtemplate(articles[articleName]) .This function takes articles object as parameter and the articles object takes articleName value which uses the path entered by the user as  index
    
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req,res)
{
  res.sendFile(path.join(__dirname,'ui','article-one.html')); 
});
app.get('/article2',function(req,res)
{
  res.sendFile(path.join(__dirname,'ui','article-two.html'));  
});
app.get('/article3',function(req,res)
{
  res.sendFile(path.join(__dirname,'ui','article-three.html'));  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
