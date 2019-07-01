const multer = require('multer'); 
const fs = require('fs');
const path = require('path');
module.exports = function () {
    try {
        // Configuring appropriate storage 
        var storage = multer.diskStorage({
            // Absolute path
            destination: function (req, file, cb) {
                let dir = path.join(__dirname,'..', 'uploads',req.body.name);
                console.log(dir);
                try{
                    fs.mkdirSync(dir);
                    cb(null, dir);
                } catch(ex){
                    cb(null, dir);
                }
              },
            // Match the field name in the request body
            filename: function (req, file, callback) {
                const extension = path.extname(file.originalname);
                const lenToRemove = extension.length;
                const filename = file.originalname.slice(0,lenToRemove*-1);
                callback(null, `${filename}-${Date.now()}${extension}`);
            }
        });
        return storage;
    } catch (ex) {
        console.log("Error :\n"+ex);
    }
}