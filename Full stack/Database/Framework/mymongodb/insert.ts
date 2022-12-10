var MongodbClient=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
MongodbClient.connect(url,(err:any,db:any)=>{
    if(err) throw err
    console.log('db connected')
    var dbo=db.db('testDB')
    var chandu={name:'schandu',chocalate:'silk',heroin:'ananya'}
    dbo.collection('test-student').insertOne(chandu,(err:any,res:any)=>{
        if(err)throw err;
        console.log('inserted data',res)
        db.close()
    })
})