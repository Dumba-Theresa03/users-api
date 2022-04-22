
const userhandler ={}

userhandler.handleErrors = (error)=>{
    let errorData = {username:"", password:""};

    if(error.code ===11000){
        errorData.username = "the username is not availabe";
        return errorData;
    };

    if (error.message.includes("user validation failed")){

        object.values(error.errors).forEach(({properties})=>{
            errorData[properties.path]= properties.message;
        })
    }
}
module.exports =userhandler