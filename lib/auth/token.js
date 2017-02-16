const jwt = require('jsonwebtoken-promisified');
// This is our app secret that enables our tokens to be "untampered with"
const sekrit = process.env.APP_SECRET || 'change-me';

module.exports = {
    sign(user) {
        const payload = {
            id: user._id,
            roles: user.roles
        };
        
        // returns the token
        return jwt.signAsync(payload, sekrit);
    },
    verify(token) {
        // returns the payload
        return jwt.verifyAsync(token, sekrit);
    }
};