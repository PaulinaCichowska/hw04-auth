import { login } from "#controllers/controllerLogin.js"
import { logout } from "#controllers/controllerLogout.js"
import { signUp } from "#controllers/controllerSignup.js"
import express from "express"


const router = express.Router()

router.post('/signup', signUp)
router.post('/login', login)
router.post('/logout', logout)
// router.get('/current', postContact)


export default router
