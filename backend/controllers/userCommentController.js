import userCommentModel from "../models/userCommentModel.js";

export const createNewComment = async (req, res) => {
    const {name, title, comment} = req.body

    try {
        if (name !== "" && title !== "" && comment !== ""){

            const newComment = new userCommentModel({
                name: name,
                title: title,
                comment: comment
            })
            await newComment.save()
            res.status(201).json({success:true, message: `${name}, Your Comment posted!`})
        }else{
            res.status(301).json({message: "Provide all details"})
        }
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to post the comment"})
    }
}

export const getAllComments = async (req, res) => {
    try {
        const comments = await userCommentModel.find({})
        res.status(200).json({success: true, allComments: comments})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({success: false, message: "Failed to post the comment"})
    }
}