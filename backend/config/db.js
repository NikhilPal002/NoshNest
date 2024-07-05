import mongoose, { connect } from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://nikhilpal2017:nikhil123@cluster0.ge7hrg0.mongodb.net/noshnest?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("Database connected"));
}