const express=require('express')
require('./data-base/mongoose')
const User=require('./models/User')
const app=express()

const port=process.env.PORT ||3000

app.use(express.json())
app.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
        

    })
})
app.get('/users',(req,res)=>{

    User.find({}).then((user)=>{
        res.send(user)
    }).catch((e)=>{

    })

})

app.get('/users/:id',(req,res)=>{
    const _id=req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch(()=>{
        res.status(500).send()
    })
})


app.listen(port,()=>{

    console.log('server is up on port '+port)
})