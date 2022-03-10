import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import File from '../models/File.js';
import authConfig from '../../config/auth.js';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email },
    include: [
      {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    ],
   });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, provider } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        provider,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        // md5=gobarber / apos criar arquivo auth.js alterar o o hash md5 para authConfig.secret
        expiresIn: authConfig.expiresIn,
        // alterar para authConfig.expiresIn
      }),
    });
  }
}

export default new SessionController();

