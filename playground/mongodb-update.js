const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
// db.collection('Todos').findOneAndUpdate({text: 'Eat Lunch'},{
//     $set:{ 
//         text:'Lunch had been completed'
//     }
// },{
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// });
    
    db.collection('Users').findOneAndUpdate({name:'Raja'},{
        $set:{
            name:'Raja'
        },
        $inc:{
            age:9
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
});