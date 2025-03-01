import mongoose from "mongoose";

const userComment = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    title: {
        type: "String",
        required: true
    },
    comment: {
        type: "String",
        required: true
    }
}, {
    timestamps: true
})

const userCommentModel = mongoose.model("comments", userComment)

export default userCommentModel