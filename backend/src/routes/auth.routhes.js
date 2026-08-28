import { Router } from 'express'
import { signup, login, logOut } from "../controllers/auth.controller.js";


const authRoutes = Router();


authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logOut);

export default authRoutes;