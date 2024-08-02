const express=require('express');
const server =express();

server.listen(3000);

server.get('/',(req,res)=>{
    res.send('<h1>Olá ExpressJS</h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h2>Este sever é do 3DS</h2>')
})
server.get('/servicos',(req,res)=>{
    res.send('<h2>Este sever é sobre os serviços do 3DS</h2>')
})

server.get('/json',(req,res)=>{
    res.send({'nome':'Alcebíades'})
})

server.use((req,res)=>{
    res.status(404).send("<h1>Não consigo ler NADA!</h1>");
})
