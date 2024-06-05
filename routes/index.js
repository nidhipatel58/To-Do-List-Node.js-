let express=require("express");
let routes=express.Router();
let todoRoute=require("./todo.route");




routes.use("/user",todoRoute)


module.exports=routes;