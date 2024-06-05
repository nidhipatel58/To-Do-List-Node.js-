let { todoService } = require("../service")

let register = async (req, res) => {

  try {
    console.log(req.body);
    let body = req.body

    let list = await todoService.register(body)
    console.log("list add", list);

    res.status(201).json({
      message: "Task added Successfully.",
      list,
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  };
};

let findAlltask = async (req, res) => {
  try {
    console.log(req.body);
    let findtask = await todoService.findAlltask();

    res.status(200).json({
      message: "task get success...",
      findtask,
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  };
};


let deletetask = async (req, res) => {
  try {
    let {id} = req.params
    let deleted = await todoService.deletetask(id);
    if (!deleted) {
      return res.status(404).json({
         message: "Todo not found" 
        });
  };
    res.status(200).json({
      message: "delete task success",
      deleted,
    });
  } catch (err) {
    res.status(500).json({
      message: "something went wrong.."
    });
  };
};

let updatetask=async(req,res)=>{
  try{
    let body = req.body;
    let {id}=req.params;
    let update=await todoService.updatetask(id, body);
    res.status(200).json({
      message:"update successfully",
      update,
    });
  }catch(err){
     res.status(500).json({
      message:"error" ,
     });
  };
};


module.exports = { register, findAlltask,deletetask,updatetask}