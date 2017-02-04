var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one': {
    title: 'Article-One |Basudeb Mitra',
    heading: 'Article-one',
    date: '4th February, 2017',
    content:`<p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>`
},
    'article-two': {
        title: 'Article-Two |Basudeb Mitra',
        heading: 'Article-two',
        date: '4th February, 2017',
        content:`<p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>`},
    'article-three': {
        title: 'Article-Three |Basudeb Mitra',
        heading: 'Article-three',
        date: '4th February, 2017',
        content:`<p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>
            <p>
                Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.Today, I learned to add web-pages to an existing web-server.
            </p>`
    }
};
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var template=`<html>
    <head>
        <title>
            ${title}
        </title>
        <style>
            .one{
                float: right;
            }
            .two{
                clear: both;
                color: blue;
                font-family:Arial;
                margin:auto;
                border: 2px solid black;
                width: 800px;
                background-color:orange;
            }
            #three{
                
                text-decoration:underline;
            }
            
        </style>
    </head>
    <body>
        <a href="/">Home</a>
        <hr/>
        <div class="one">
            ${date}
        </div>
        <div align="center" id="three">
            <h3>${heading}</h3>
        </div>
        
        
        <div class="two">
            ${content}
        </div>
    </body>
</html>`
return template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlesName',function(req,res){
    var articlesName=req.params.articlesName;
   res.send(createTemplate(articles[articlesName])); 
});
/*app.get('/article-two',function(req,res){
    res.send(createTemplate(articles.articleTwo)); 
});
app.get('/article-three',function(req,res){
    res.send(createTemplate(articles.articleThree)); 
});*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
