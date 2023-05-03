const multer=require("multer");
const path = require("path");
const typeimage = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
  };
const storage=multer.diskStorage({
    filename: (req,file,callback) =>{
        const name=file.originalname.split(" ").join("_");
        //Les espaces dans le nom font un probleme coté serveur !
        const extension=typeimage[file.mimetype];
        callback(null,name + Date.now() + extension);
        //Date.now() va empecher d'avoir deux images ayant le meme nom !
        },
        fileFilter: (req, file, callback) => {
            let ext = path.extname(file.originalname);  
            if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
              cb(new Error("File type is not supported"), false);
              return;
            }
            callback(null, true);
          }
    });

module.exports=multer({storage}).single('image');