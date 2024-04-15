import { ExtractJWT, Strategy } from "passport-jwt"
import { User } from "#models/userSchema.js"
import dotenv from 'dotenv'
import passport from 'passport'
dotenv.config()

const secret = process.env.SECRET

const params = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
}

passport.use(
    new Strategy(params, function (payload, done) {
        User.find({ _id: payload.id })
            .then(([user]) => {
                if (!user) {
                    return done(new Error('User not found'))
                }
                return done(null, user)
            })
            .catch((err) => done(err))
    }),
)
