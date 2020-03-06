const express=require('express')
require('./data-base/mongoose')
const User=require('./models/User')
const app=express()
const userRouter=require('./routers/user')
const port=process.env.PORT ||3000

app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{

        console.log('server is up on port '+port)
    })
const bcrypt=require('bcryptjs')
const myfunc=async ()=>{
    const password='srinu123'
    const hashedpassword=await bcrypt.hash(password,8)
    console.log(password)
    console.log(hashedpassword)
}

myfunc()