const {GraphQLError}= require ('graphql')
const jwt = require('jsonwebtoken');

const expiration = '2h'

const authMiddleware = (req, res, next) => {
    const token = req.body?.token || req.query?.token || req.headers?.authorization || '';

    if (token.startsWith('Bearer ')) {
        try {
            const decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            console.error('Invalid token');
        }
    }

    next();
};
module.exports = {
    AuthenticationError: new GraphQLError('User could not be authenticated',
        {
            extensions: {
            code: 'UNAUTHENTICATED',
        },
        }),
    signToken: function ({ username, _id }) {
        const 
    }
}
module.exports = authMiddleware;
