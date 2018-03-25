var express = require('express');
var morgan = require('morgan');
var path = require('path'); 

var app = express();
app.use(morgan('combined'));

var articleone={
    title: "Article One | Avino Jennifer",
    heading: "Article One",
    date: " 25 March, 2018",
    content:`
            <p>
             This is the content for my first article
             This is the content for my first article
             This is the content for my first article
            </p>
            <p>
             This is the content for my first article
             This is the content for my first article
             This is the content for my first article
            </p>`
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title> ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
    </head>
    
    <body>
        <div class="container">
            
        <div>
            <a href="/"> Home</a>
        </div>
        
        <hr/>
        
        <h3> ${heading}</h3>
        
        <div>
            ${date}
        </div>
        
        <div>
             
            ${content}
            
        </div>
        </div>
    </body>
</html>`;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function(req,res){
    res.send(createTemplate(articleone));
});


app.get('/articletwo', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});

app.get('/articlethree', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
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
