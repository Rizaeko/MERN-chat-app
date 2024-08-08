
//package imports
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

//routes import
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'
dotenv.config()


const PORT = process.env.PORT 

//middleware
app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/",(req,res) =>{
//     res.send("Server is ready")
// })


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})