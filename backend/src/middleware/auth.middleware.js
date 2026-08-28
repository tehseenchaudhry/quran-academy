import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";


export const authMiddleware = async (req, res, next) => {
    try {

        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "token not found"
            })

        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET);


        const user = await userModel.findById(decode.userId).select("-password")

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user not found"
            })

        }
        req.user = user;
        next();
    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}