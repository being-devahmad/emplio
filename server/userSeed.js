import { connectDb } from "./db/db.js"
import User from "./models/User.js"
import bcrypt from "bcrypt"

const userRegister = async () => {
    connectDb()
    try {
        const hashedPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin"
        })

        await newUser.save()
        console.log("newUser-->", newUser)
    } catch (error) {
        console.error("error->", error)
    }
}

userRegister()