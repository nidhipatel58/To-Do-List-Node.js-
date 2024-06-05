require("dotenv").config();
let http = require("http");
let express = require("express");
const dbconnect = require("./db/db.connect");
let app = express();
let routes=require("./routes");
let cors=require("cors")


//cors
app.use(
    cors({
        origin:"*",
    })
)


//body
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Routes
app.use("/v1",routes)


//Database connection:-
dbconnect();


// Server Setup:-
http.createServer(app).listen(process.env.PORT,()=>{
    console.log(`Server Started:)${process.env.PORT}`)
});