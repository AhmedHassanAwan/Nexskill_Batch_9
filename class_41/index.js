
import express from "express";
import { router } from "./routing/todorouting.js";
import dotenv from "dotenv"

dotenv.config();
const port = process.env.PORT
console.log(port);

const app = express();

app.use(express.json()); // build in middleware 



app.use("/" , router)





// home api
app.get("/", (req, res) => {

    res.send({ status: 200, msg: "Api is runing..." })

})







app.listen(port, () => {
    console.log("server running port", port);

})



// crud opertaor
// c create
// r red
// u updated
// d delete