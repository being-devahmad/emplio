import mongoose from "mongoose";

// export const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MOMGO_URL)
//     } catch (error) {
//         console.log("error--->", error)
//     }
// }



export const connectDb = async () => {
    const mongoUri = process.env.MONGO_URL;
    if (!mongoUri) {
        throw new Error("MongoDB connection URI is missing. Please set MONGODB_URI environment variable.");
    }

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
};
