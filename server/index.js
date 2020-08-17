require('dotenv').config(); 
const express = require('express'); 
const app = express(); 
const session = require('express-session'); 
const massive = require('massive');
const auth = require('./controller')
const bodyParser  = require('body-parser');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env; 

app.use(express.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    resave: false, 
    saveUninitialized: true, 
    cookie: {maxAge: 1000 * 60 * 60 * 24}, 
    secret: SESSION_SECRET
})); 

massive({
    connectionString: CONNECTION_STRING, 
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('This Server Is Now Connected To The Database!')
}).catch(err => console.log(err))


///endpoints
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.get('auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)
// app.get(/api/posts/:userid, )
// app.get(/api/posts/:postid, )

app.listen(SERVER_PORT, () => console.log("Server Running On Port " + SERVER_PORT))

