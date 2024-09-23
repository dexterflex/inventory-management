export const auth = (req, res, next) => {
    if (!req.session.user_email) {
        return res.redirect('/login')
    }
    next();
}