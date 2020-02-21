
const userController = {};

userController.post = (res, req) => {
    const {username, password} = req.body;

    const user = new db.user({
        username,
        password
    });
    user.save().then((newUser) => {
        res.status(200).json({
            success: true
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
}

module.exports = mongoose.model('User', userController);