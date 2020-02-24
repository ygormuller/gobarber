import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // tranforma callback em req, res

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  const [, token] = authHeader.split(' '); // descartando a primeira posição do array ex.: [Bearer, token]
  // split não funciona sem espaço nas aspas
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    console.log(decoded);
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
