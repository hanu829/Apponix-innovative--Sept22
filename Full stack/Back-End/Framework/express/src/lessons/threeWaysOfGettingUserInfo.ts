app.post('/cars',(req:any,res:any)=>{
    console.log(req.query)
    console.log(req.body)
//console.log(req.body)
 res.send('helloS')
})

app.get('/cars',(req:any,res:any)=>{
    console.log(req.query.username)
    res.send(req.query.username)
})

app.get('/user/:id',(req:any,res:any)=>{
    console.log(req.params.id)
    res.send(req.params.id)
})
