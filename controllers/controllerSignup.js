import { User } from "#models/userSchema.js"
export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email }).lean();
    if (user) {
        return res.status(409).json({
            status: 'error',
            code: 409,
            message: 'Email is already in use',
            data: 'Conflict',
        })
    }
    try {
        const newUser = new User({ username, email });
        newUser.setPassword(password);
        await newUser.save();
        res.status(201).json({
            status: 'success',
            code: 201,
            data: {
                name: {
                    "email": email,
                    "subscription": "starter"
                },
            }
        });
    } catch (error) {
        next(error);
    }
}