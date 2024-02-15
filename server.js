require ('dotenv').config();
const http = require('http')
const app = require('./app/index.js')

const server =http.createServer(app)

server.listen(process.env.PORT,()=>{
console.log(`http://localhost:${process.env.PORT}`)
})