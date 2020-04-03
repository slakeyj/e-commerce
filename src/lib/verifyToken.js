import jwt from 'jsonwebtoken';

const verifyToken = token => {
  try {
    const user = jwt.verify(token, 'fine, keep your secrets');
    return user;
  } catch (e) {
    console.error('Invalid Token', e)
  }
}

export default verifyToken;