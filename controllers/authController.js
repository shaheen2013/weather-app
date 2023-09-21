const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function loginUser(req, res) {
    const { username, password } = req.body;

    if(username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
}

function ensureAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send('Token missing');

    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(401).send('Token not valid');
        req.user = user;
        next();
    });
}

module.exports = {
    loginUser,
    ensureAuth
};
