function middle(req:any,res:any,next:any){
    console.log('i m called advanced')
    next()
}
  //calling
  //app.use(middle)
  ///middle ware we give in in curd methods