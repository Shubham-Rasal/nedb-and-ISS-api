const express = require('express');

const Datastore=require('nedb');

const app = express();



const database=new Datastore('database.db');
const moodData=new Datastore('moodData.db');
database.loadDatabase();
moodData.loadDatabase();





app.listen(3000,()=>console.log('listening at 3000'));
app.use(express.static('clientside'));
app.use(express.json({limit:'1mb'}));
app.post('/api',  (req, res)=>{
    console.log(req.body)
    const data=req.body;
    const timestamp = Date.now();
   data.time = timestamp;
  if (data.mode) {
      moodData.insert(data)     
      
  }
  else{
      
    database.insert(data)
    console.log(data)

  }

  
   


});
app.get('/api', (request,response)=>{
    database.find({},(err,docs)=>{
        if (err){
            response.end();
            return;
        }
        response.json(docs);
    });
    
});









