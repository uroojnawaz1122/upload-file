const express= require('express');
const cors= require('cors');
const uploadFile = require('./controller/index');

const app =express();
app.use(cors()); 

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
//allow incoming request from my ip




// const storage= multer.diskStorage({
//  destination: function(req, file , callback){
//     callback(null, __dirname + "/uploads");

 //},
//  filename: function( req, file, callback) {
//     callback(null, file.originalname);

//  }
// });

 
// app.post('/uploads',Array("files"), (req, res)=>{

//     console.log(req.body);
//     console.log(req.files);

//     res.json({status:"form data recieved"});


//});
app.use('/', uploadFile );
app.listen(5000, function(){
    console.log("server runing on port 5000 ");
});  