module.exports.Logout = async (req, res ) => {
    res.clearCookie("userId");
    res.clearCookie("IDAuthorization");
    res.clearCookie("UserInGroupID");
    res.redirect('/');
}