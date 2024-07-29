const express=require('express');
const server =express();

server.get('/',(req,res)=>{
    
    res.send('<h1>Olá ExpressJS</h1>')
    })

    server.get('/sobre',(req,res)=>{
    res.send('<h2>Somos quem podemosser</h2>')
    })

    server.get('/json',(req,res)=>{
    res.send({'nome':'Alcebíades'})
    })

    server.use((req,res)=>{
    //res.send('Erro!!!');
    //para mostrar o status code correto
res.status(404).send("<h1>Erro!!</h1>");

server.listen(3000);