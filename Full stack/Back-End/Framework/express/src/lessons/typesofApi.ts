app.get('/flight',(req:any,res:any)=>{
    res.send('enjoy the party')
})
app.post('/user',(req:any,res:any)=>{
    res.send('apponix student post')
})
app.delete('/usert',(req:any,res:any)=>{
    res.send('apponix student delet')
})
app.put('/user',(req:any,res:any)=>{
    res.send('apponix student put or update')
})
app.get('/user',(req:any,res:any)=>{
    res.send('apponix student get')
})
app.get('/triler',(req:any,res:any)=>{
    var triler='<iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    res.send(triler)
})