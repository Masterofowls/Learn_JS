import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { userRouter } from "./router.js";

const server = express()

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/v1/users', userRouter)

'http://localhost:3050/api/v1/users'

const port = 3050


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
