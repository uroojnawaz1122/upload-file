const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination :function (req,file,callback){
        callback(null,'./uploads');
    },
    //add the extensions
    filename : function (req,file,callback){
        callback(null,Date.now()+file.originalname);
    }
});

const upload = multer({
    storage : storage,
    limits : {
        fieldSize : 1024 * 1024 * 3,
    },
});

router.get('/', (req,res) => {
    try {
        res.render('index');
    } catch (error) {
        res.send(error);
    }
});

 router.post('/uploads', upload.single('file'), (req, res) => {
    console.log(req.files || req.file);

    res.json({status:"form data received", file: req?.file});
});

module.exports = router;