import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://charanboga:tuw6xgkky4@cluster1.h4fu9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}