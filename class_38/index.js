

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



// HTTP Methods

// GET -> Data lay kar aana.

// POST -> New data create karna.

// DELETE -> Kisi bhi data ko delete karwana.

// PUT -> Pooray object ko update karna.

// PATCH -> Kisi bhi specific field ko update karna.


// Packages

// Express install karna
// npm i express

// Nodemon install karna
// npm i nodemon