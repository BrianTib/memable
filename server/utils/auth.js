const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.body?.token || req.query?.token || req.headers?.authorization || '';

    console.log({ token });

    if (token.startsWith('Bearer ')) {
        try {
            const decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            console.error('Invalid token');
        }
    }

    return req;
};

module.exports = { authMiddleware };
