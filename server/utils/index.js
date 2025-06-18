import mongoose from "mongoose"

const dbConnection =async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connection established")
    }
    catch(error){
        console.log("DB ERROR:" ,error)
    }
}
export default dbConnection
