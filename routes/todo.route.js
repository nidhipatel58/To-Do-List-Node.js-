let express=require("express");
let route=express.Router();
let {todoController}=require("../controller");


route.post("/register",todoController.register);
route.get("/get/:id",todoController.findAlltask);
route.delete("/delete/:id",todoController.deletetask);
route.put("/update/:id",todoController.updatetask);


module.exports=route;