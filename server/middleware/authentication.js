const { checkToken } = require("../miscFunction/CommonFunction");


const authentication =async(req,res,next)=>{

    try{
        let token = req.headers.token;
        let user = await checkToken(token);
        req.user=user;
        next();
    }catch(err){
        res.status(400).send({
            err:"Invalid User"
        })
    }



}

module.exports={authentication};