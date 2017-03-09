var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto= require('crypto');
var Pool= require('pg').Pool;
var bodyParser=require('body-parser');
var config={
    user:'kushal-96',
    database:'kushal-96',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
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
            ${date.toDateString()}
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
function hash(input,salt){
 var hash1=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
 return hash1.toString('hex');
}
app.get('/hash/:input',function(req,res){
   var hashed=hash(req.params.input,'this-is-some-string');
   res.send(hashed);
});

app.post('/create-user',function(req,res){
   var username=req.body.username;
   var password=req.body.password;
   var salt=crypto.randomBytes(128).toString('hex');
   var dbString=hash(password,salt);
   pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username,dbString],function(err,result){
       if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send('User successfully created:'+username);
        }
   
       
   });   
   });
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});
var pool=new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
    });
});
var count=0;
app.get('/counter',function(req,res){
    count+=1;
    res.send(count.toString()); 
});
var names=[];
app.get('/submit-value',function(req,res){
   var n=req.query.name;
   names.push(n);
   
   res.send(JSON.stringify(names));
   
});
app.get('/articles/:articlesName',function(req,res){
    pool.query("SELECT * FROM article WHERE title=$1",[req.params.articlesName],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length===0){
                res.status(404).send('Article not found');
            }else{
                var articledata=result.rows[0];
                res.send(createTemplate(articledata));
            }
        }
    } );
    
    
});


/*
app.get('/article-three',function(req,res){
    res.send(createTemplate(articles.articleThree)); 
});*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
