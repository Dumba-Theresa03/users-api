const users = require("../data/users")

//get all users
const getUsers= (req, res)=>{
    res.status(200).json({success:true, data:users});
}
//create a user
const createUser = (req, res)=>{
    const newUser = req.body;
    users.push(newUser)
    res.status(200).json(users)
}
// get user by the id
const getUser = (req, res)=>{
    const userId = req.params.id;
    const user = users.find((u)=>u.id==userId);

    if (!user){
        return res.status(400).json({success:false, message:"user not found"});
    }
    res.status(200).json({success:true, data:user});

}


module.exports = {getUsers, createUser, getUser}