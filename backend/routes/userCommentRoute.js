import express from "express"
import { createNewComment, getAllComments } from "../controllers/userCommentController.js"

const commentRouter = express.Router()

commentRouter.post("/createComment", createNewComment)
commentRouter.get("/getAllComments", getAllComments)

export default commentRouter