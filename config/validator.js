const yup =require("yup")

function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string(). required().min(2).max(50),
        email:yup.string().required("").min(20).max(50),
        password:yup.string().required().min(8).max(100)
    })
    return validate(data)
}

module.exports=validate