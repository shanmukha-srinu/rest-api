const {MongoClient,ObjectID}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

const id=new ObjectID()
console.log(id)
MongoClient.connect(connectionURL,{ useNewUrlParser :true},(error , client)=>{
    if (error){
        return console.log('unable to connect')

    }
    const db=client.db(databaseName)
})