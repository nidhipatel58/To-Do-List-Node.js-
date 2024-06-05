let {todoSchema}=require("../models");

let register=(body)=>{
   console.log(body,"taskadd");
   return todoSchema.create(body);
}

let findAlltask=()=>{
 return todoSchema.find()
}

let deletetask=(id)=>{
 return todoSchema.findByIdAndDelete(id);
}

let updatetask=(id,body)=>{
  return todoSchema.findByIdAndUpdate(id,body)
}


module.exports={register,findAlltask,deletetask,updatetask}





