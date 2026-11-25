

import express from "express";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {

    res.send({ status: 200, msg: "Api is runing..." })

})

app.get("/users", (req, res) => {
    res.send({
        status: 200, msg: "data fetch sucessfully ", data: [
            { id: 1, name: "ali", email: "ali@gmail.com" },
            { id: 1, name: "ali", email: "ali@gmail.com" },
            { id: 1, name: "ali", email: "ali@gmail.com" },
        ]
    })
})



// todo 


// post

let todo =  [];
app.post("/todo" , (req,res)=>{
    const {title , description} =   req.body;

    if(!title || !description){
        return res.status({status:400 , msg:"please all filed are required ! "})
    }

    console.log("req.bod===>" , req.body);

    todo.push(req.body);

    res.send({status:200 , msg:"todo create"  , data : req.body})
})




// get todo 
app.get("/todos" , (req,res)=>{
    res.send({status:200 , msg:"data get" , data:todo})
})

// delete todo

app.delete("/todo/:id" , (req,res)=>{

    const id = req.params.id


    if(!todo[id]){
        return res.send({status:400 , msg:"data not found "})
    }
    console.log("id===>" , id);

    // res.send({msg:id})

    todo.splice(id,1);

    res.send({status:200  , ms:"data delete " , data:todo})
    

})







app.listen(5000, () => {
    console.log("server running port", 5000);

})

