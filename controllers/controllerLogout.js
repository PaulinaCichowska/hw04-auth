import { User } from "#models/userSchema.js"
export const logout = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    try {
        if (!user || !user.validPassword(password)) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'Incorrect login or password',
                data: 'Bad request',
            })
        }
        user.token = null;
        res.json({
            status: 'success',
            code: 204,

        })
        return User.findOneAndUpdate(
            { _id: user.id },
            { $set: { token: null } }
        )
    }
    catch (error) {
        next(error);
    }
}