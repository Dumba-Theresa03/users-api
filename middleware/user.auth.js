function auth(req,res,next){
    const {username, password}=req.body
    
        if(username == "Admin" && password == "12345678") {
            console.log("log in successfully")
            next()
        }else{
            console.log("Not authorized")
            throw Error
        }
    }
    
    
    module.exports =auth