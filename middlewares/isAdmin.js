exports.isAdmin = (req, res, next) => {
    if(!req.session.isAdmin) {
        console.log("user not admin")
        return res.redirect('/login');
    }

    next()
}