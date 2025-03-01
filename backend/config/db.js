import mongoose from "mongoose"

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully!")
    } catch (error) {
        console.log("Error connecting to DB", error)
        process.exit(1)
    }
}

export default connectDB