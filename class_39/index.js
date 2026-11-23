

import express  from "express";


const app = express();

app.use(express.json());


app.get("/"  ,(req,res)=>{
    res.send({staus:200 , msg:"data fetch"})

})


let todo = [];


app.post("/todo" , (req,res)=>{

    const {title , description} = req.body;

    if(!title || !description){
        return res.status({status:400 , msg:"please fill requird "})
    }

    todo.push(req.body);
    res.send({status:200 , msg:"todo create" , data:req.body})

})


app.delete("/todo/:id", (req,res)=>{

    const index = req.params.id
    console.log(index);

    // res.send({id:index})

    todo.splice(index , 1)

    res.send({status:200 , msg:"data delete "})
    


})





app.get("/todos" , (req,res)=>{

    res.send({status:200 , msg : "todo data" , data:todo})
})







// app.get("/users" , (req,res)=>{
//     res.send({status:200 , msg:"users data" , data: [
//         {id : 1 , name:"ali" , email:"ali@gmail.cm"},
//         {id : 1 , name:"ali" , email:"ali@gmail.cm"},
//         {id : 1 , name:"ali" , email:"ali@gmail.cm"},
//         {id : 1 , name:"ali" , email:"ali@gmail.cm"},

//     ] })
// })



// app.post("/user" , (req,res)=>{

//     const {name , email} = req.body;
//     console.log("req.body===>" , req.body);
    

//     res.send({status:200  , msg:"data create" , data:req.body});
// })


app.listen(5000 , ()=>{
    console.log("server running is port" , 5000);
    
})


// HTTP Methods

// GET -> Data lay kar aana.

// POST -> New data create karna.

// DELETE -> Kisi bhi data ko delete karwana.

// PUT -> Pooray object ko update karna.

// PATCH -> Kisi bhi specific field ko update karna.