var MomgodbClient=require('mongodb').MongoClient;
var db_server_url="mongodb://127.0.0.1:27017/"
MomgodbClient.connect(db_server_url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    dbo.createCollection('test-student',(err:any,res:any)=>{
        if(err)throw err
        console.log('created one collection')
        db.close()
    })
})