const MongoColient = require('mongodb').MongoClient;

MongoColient.connect('mongodb://localhost:27017/TotoApp',(err, client)=>{
   if(err){
       return console.log('Unable te connect to Mongo DB server!!!');
   }
   console.log('Connected to mongo DB server..');
   const db = client.db('TotoApp');

   /*db.collection('Todos').insertOne({
       'text': 'Something to do',
       'completed' : false
   },(err, result) =>{
       if(err){
           return console.log('Unable to inset collection todos', err)
       }

       console.log(JSON.stringify(result.ops, undefined, 2));
   });*/

   db.collection('users').insertOne({
       name : 'hanine',
       age : 28,
       location : 'Marrakech'
   },(err, result)=>{
       if(err){
           return console.log('Unable to inset collection users', err)
       }

       console.log(JSON.stringify(result.ops, undefined, 2))
   });


   client.close();
});