const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Login Page</h1>');
});

app.get('/register',(req,res)=>{
    res.send('<h1>Register Page</h1>');
});

app.get('/search',(req,res)=>{
    res.send(req.query.q || 'Search');
});

app.get('/admin',(req,res)=>{
    res.send('<h1>Admin Panel</h1>');
});

app.listen(3000,()=>{
    console.log('Running');
});