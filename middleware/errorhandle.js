const { constants} = require("../constants");
const errorHandler = (err, req, res, next) =>{
    // transforing error into json format 
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                tittle: "Validation Failed",
                message: err.message, 
                stackTrace: err.stack});
            break;
    
        case constants.NOT_FOUND:
            res.json({
                tittle: "Not Found",
                message: err.message, 
                stackTrace: err.stack});
            break;
            case constants.UNAUTHORIZED:
                res.json({
                    tittle: "unauthorized",
                    message: err.message, 
                    stackTrace: err.stack});
                break;
            case constants.FORBIDDEN:
                res.json({
                    tittle: "forbidden",
                    message: err.message, 
                    stackTrace: err.stack});
                break;
            case constants.SERVER_ERROR:    
                    res.json({
                    tittle: "server error",
                    message: err.message, 
                    stackTrace: err.stack});
                break;
        default:
            console.log("No Error, All good !")
            break;
    }
 
  
};

module.exports = errorHandler;