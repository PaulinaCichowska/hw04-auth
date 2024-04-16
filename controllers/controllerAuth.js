import { User } from "#models/userSchema.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.SECRET

export const auth = async (req, res, next) => {

    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (!user || err) {
            return res.status(401).json({
                status: 'error',
                code: 401,
                message: 'Unauthorized',
                data: 'Unauthorized',
            });
        }
        req.user = user;
        next();
    })(req, res, next);
};
