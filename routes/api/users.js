import { login } from "#controllers/controllerLogin.js"
import { logout } from "#controllers/controllerLogout.js"
import { signUp } from "#controllers/controllerSignup.js"
import express from "express"
import { authMiddleware } from "#middleware/authMiddleware.js"
import { current } from "#controllers/controllerCurrent.js"
import { validateSchema } from "#validation/joi.js"





const router = express.Router()

router.post('/signup', validateSchema, signUp)
router.post('/login', validateSchema, login)
router.get('/logout', authMiddleware, logout)
router.get('/current', authMiddleware, current)


export default router

