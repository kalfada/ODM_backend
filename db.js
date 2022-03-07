const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectionString = `mongodb+srv://kalfada:Mottiemmanuelle123@cluster0.d48l6.mongodb.net/odmDB?retryWrites=true&w=majority`
    
mongoose.connect(connectionString)
    .then(res => {
        console.log('mongo connected')
    })
    .catch(()=>{
        throw 'mongo not connected'
    })