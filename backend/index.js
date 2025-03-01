import express from "express"
import "dotenv/config.js"
import cors from "cors"
import connectDB from "./config/db.js"
import commentRouter from "./routes/userCommentRoute.js"

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT

connectDB()

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <link
      rel="icon"
      type="image/svg+xml"
      href="https://res.cloudinary.com/dvxkeeeqs/image/upload/v1727239316/vs_syjood.jpg"
    />
          <title>Docker Compose server</title>
          <style>
          *{
            margin: 0;
          }
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #0000ff;
            }
            h1{
                color: white;
            }
          </style>
        </head>
        <body>
            <div>
                <h1>You are Successfully started Docker Compose Server</h1>
            </div>
        </body>
        </html>
      `);
})

app.use("/api/v1", commentRouter)

app.listen(port, () => {
    console.log("Node server started and running successfully!!")
})

