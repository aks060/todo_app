const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import {conn, session, bcrypt} from './include/include';


app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + '/static'));
app.use(session({
    secret: 'dh dgfuier f reiufhui45t 543r c45t 34f 45f 34f ctgy5threfcecr34 ',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true}
}));


app.get('/', function(req, res){
    res.send('Working');
});

app.listen(8000, function(){
    console.log('Server running on 0.0.0.0:8000');
});