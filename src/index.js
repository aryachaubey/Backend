import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
connectDB();

/*;(async ()=>{
    try{

   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("ERROR: ",error);
    throw error;
   })

   app.listen(process.env.PORT,()=>{
    console.log(`app is running at port: ${process.env.PORT} `)
   })
    }
    catch(error){
    console.error("ERROR", error)
    throw err
    }
}) () //ife function call right after its implementation */
