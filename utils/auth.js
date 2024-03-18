const withAuth = (req, res, next) => {
    // Check if user is authenticated
    if (!req.session.customer_id) {
        // Redirect to login page if not authenticated
        return res.redirect('/login');
    } else {
        // Proceed to the next middleware if authenticated
        return next();
    }
}

module.exports = withAuth;
