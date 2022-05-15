
//mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodemongo');
const db = mongoose.connection;
// Check for DB connection
db.once('open', function(){
 console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
 console.log(err);
});

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/nodemongo',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true

// }).then(() =>{
//     console.log(`connection is successful`);

// }).catch((e) =>{
//     console.log(`no connection`);

// })
