var http=require('http')
console.log(http)
var url=require('url')
http.createServer((req:any,res:any)=>{
if(req.url=='/chandu'){
    res.write('hi im don')
    res.end()
}
}).listen(8006,()=>{console.log('server has been started 8006')})