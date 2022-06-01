const http = require('http')
const  serveur = http.createServer((req,res)=>{
res.setHeader('content-type','text/html')
res.write('<h1> Un paragraphe ecrit en node js</h1>')
res.end()
})
serveur.listen(8080)