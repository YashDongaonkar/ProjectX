import express from "express"

import {registerUser,loginUser,logoutUser}  from '../controllers/userController.js'

const authRoute=express.Router()

authRoute.post("/register",registerUser)
authRoute.post("/login",loginUser)
authRoute.get("/logout", logoutUser);

export default authRoute