import passport from "passport";

export const authMiddleware = async (req, res, next) => {

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
        console.log(user);
        next();
    })(req, res, next);

};
