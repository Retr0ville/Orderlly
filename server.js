const express = require('express');
const mongoose = require('mongoose');
// const PcAccessory = require('./models/pcAccessory');

const app = express();
const dbUri = 'mongodb+srv://Rtrvl:Sesameex1@cluster0.zvqqc.mongodb.net/Orderlly?retryWrites=true&w=majority' ;

mongoose.connect(dbUri).then((result)=>{
  console.log('connected to MongodB');
  app.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log('listening on port 3000...');
  })
}).catch((err)=>{console.log(err);});









// const testPost = new PcAccessory({
//   itemName :'qqq',
//   description: 'eee',
//   itemStatus: 'ccc',
//   cost: 20
// });
// testPost.save().then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });

