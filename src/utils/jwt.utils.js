import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'supersecreta';

export function generateToken(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: '1d' });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}
