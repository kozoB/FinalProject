exports.MapPage = async (req, res) => {
    const {isAdmin,isLoggedIn} = req.session;
    res.render('MapPage', {isAdmin,isLoggedIn});
}