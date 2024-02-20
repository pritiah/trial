const mongoose=require('mongoose')

const connectDb= async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("db connected");

    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports =connectDb