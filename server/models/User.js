import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    }
}, {
    timestamps: true // This will add `createdAt` and `updatedAt` fields automatically
});

const User = mongoose.model("User", userSchema);
export default User;
