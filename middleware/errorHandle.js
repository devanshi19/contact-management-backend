const constants = require("../constants")
const errorHandle = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack});
            break;
        case constants.NOT_FOUND :
            res.json({title:"Not Found",message:err.message,stackTrace:err.stack});
            break;
        case constants.SERVER_ERROR :
            res.json({title:"Internal Server Error",message:err.message,stackTrace:err.stack});
            break;
        case constants.FORBIDDEN :
            res.json({title:"Forbidden Error",message:err.message,stackTrace:err.stack});
            break;
        case constants.UNAUTHORIZED :
            res.json({title:"Authorization Failed",message:err.message,stackTrace:err.stack});
            break;
        default :
        console.log("No Error All Good!")
        break;
    }
}

module.exports = errorHandle;