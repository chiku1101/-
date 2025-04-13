import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const verifyToken = async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set user from payload
    req.user = decoded.user;

    // Get additional user info from database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    // Add user email and phone to req.user
    req.user.email = user.email;
    req.user.phone = user.phone;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default verifyToken;