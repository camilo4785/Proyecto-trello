const express = require('express');
const app = express();

const path = require ('path');

//settings
app.set('port',2002);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname + '/views'));


//middlewares



//static files

app.use(express.static(path.join(__dirname, 'public' )))

//routes

app.use(require('./routes/index'));


//listen server
app.listen(app.get('port'), () =>{

console.log('ejecutandose en el puerto', app.get('port'));

});

console.log('server liten')