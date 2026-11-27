
const mytoken = process.env.mytoken
console.log(mytoken);

export  const middleware = (req,res,next)=>{

    const token = req.query.token
    
    console.log(token);

    if(token == ""  || token == undefined ){
        return res.send({msg:"required token"})
    }
    if(mytoken != token){
        return res.send({status:400 , msg:"Invalid token! "})

    }
                                                                                    

    next()
}
