

import express from "express";

const port = 5000;

const app = express();

app.use(express.json());

// Get
app.get("/", (req, res) => {
    res.send({ status: 200, data: "hellow api" })
})


// Get /users
app.get("/users", (req, res) => {
    res.send({ staus: 200, msg: "users data fetch", data: [{ id: 1, name: "ali", email: "ali@gmail.com" }, { id: 2, name: "hassan", email: "hassan@gmail.com" }, { id: 3, name: "usman", email: "usman@gmail.com" }] })
});



app.post("/user" , (req,res)=>{
    const {name , email} = req.body; 

    res.send({staus : 200 , msg :"user create sucessFull" , data:req.body})

})



app.listen(port, () => {
    console.log("server runnning port ", port);

})



// HTTP Method
// Get -> data lay kar anaa
// Post -> create
// delete -> koi b kam ko delete karwana
// put -> koi  b kam ko update karwana puray obj ko update karta hya
// patch -> kisi b specific fields  ko update karna




// pakages
// npm i express js
// npm i nodemon 