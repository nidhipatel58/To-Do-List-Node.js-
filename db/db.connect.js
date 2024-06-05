let mongoose = require("mongoose");


function dbconnect() {

    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Datebase Connected successfully:)");
        })
        .catch((err)=>{
          console.log(err,"error");
        })
} 

module.exports=dbconnect;