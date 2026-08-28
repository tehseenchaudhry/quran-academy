import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";




export const signup = async (req, res) => {
    try {
        const { name, email, password, isAgree } = req.body;

        if (!name || !email || !password || !isAgree) {
            return res.status(400).json({
                success: false,
                message: "plz required all fields"
            })
        }



        const exsistinguser = await userModel.findOne({ email })

        if (exsistinguser) {
            return res.status(409).json({
                success: false,
                message: "email alredy exist, use a different email"
            })

        }
        const hashPassword = await bcryptjs.hash(password, 8)

        const newuser = await userModel.create({
            name,
            email,
            password: hashPassword,
            isAgree
        })
        res.status(201).json({
            success: true,
            message: "signup successfully!"
        })



    } catch (error) {
         console.log("SIGNUP ERROR:", error);

    return res.status(500).json({
        success: false,
        message: error.message
    });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
         if (!email || !password ) {
            return res.status(400).json({
                success: false,
                message: "plz required all fields"
            })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user do not exist please signup"
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
    return res.status(401).json({
        success: false,
        message: "password do not match"
    })
}


        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.cookie("token", token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "signIn successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })

    }

}



export const logOut = async(req, res) => {

    res.clearCookie("token", {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
    })

    return res.status(200).json({
        success: true,
        message: "logOut successfully!"
    })

}