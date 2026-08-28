import { Router } from 'express'
import { signup, login, logOut, userProfile } from "../controllers/auth.controller.js";


const authRoutes = Router();


authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logOut);
authRoutes.get("/user-profile", userProfile)

export default authRoutes;