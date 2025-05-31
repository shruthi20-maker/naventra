import express from "express"
import { addUser, deleteUser, getUser, updateUser } from "../controller/userController.js"
const userRouter = express.Router()
userRouter.post("/add-contact",addUser)
userRouter.get("/get-contact",getUser)
userRouter.put("/update-contact/:id", updateUser) 
userRouter.delete("/delete-contact/:id", deleteUser)
export default userRouter
