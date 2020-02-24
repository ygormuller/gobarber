<<<<<<< HEAD
import * as Yup from 'yup';
=======
>>>>>>> 00e0613de10b459aad39c24aae0a0b7f1f7d0f37
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
<<<<<<< HEAD
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

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
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
=======
	async store(req,res) {
	const { email, password } = req.body;

	const user = await User.findOne({ where: {email}});

	if(!user) {
	return res.status(401).json({error:'User not found'});
	if (!(await user.checkPassword(password))) {
	return res.status(401).json({error:'Password does not match'});
	}

	const {id, name} = user

	return res.json({
	user:{
		id,
		name,
		email,
	},
	token: jwt.sign({ id }, 'md5',{
//apos criar arquivo auth.js alterar o o hash md5 para authConfig.secret
	expireIn: '7d',
// alterar para authConfig.expiresIn
	}),
	});
	}
    }
    export default new SessionController();
>>>>>>> 00e0613de10b459aad39c24aae0a0b7f1f7d0f37
