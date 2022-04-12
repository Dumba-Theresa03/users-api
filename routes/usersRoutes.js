const {Router} =require("express")
const auth = require("../middleware/user.auth")

const{getUsers, createUser, getUser} =require("../controllers/usersController")

const router =Router();


router.route("/users").get(getUsers).post(createUser)
router.get("/users/:id", auth, getUser)


module.exports=router