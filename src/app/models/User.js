<<<<<<< HEAD
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      // super chama init do Model
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
=======
import Sequelize, { Model } from  'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
  	  static init(sequelize){
	  super.init(// super chama init do Model
		{
		  name: Sequelize.STRING,
		  email: Sequelize.STRING,
		  password: Sequelize.VIRTUAL,
		  password_hash: Sequelize.STRING,
		  provider: Sequelize.BOOLEAN,
		},
		{
		  sequelize,
		}
	);

		this.addHook('beforeSave', async user => {
			if(user.password) {
			user.password_hash = await bcrypt.hash(user.password, 8);
				}
			});

			return this;
	}

	checkPassword(password){
		return bcrypt.compare(password, this.password_hash);
	}
>>>>>>> 00e0613de10b459aad39c24aae0a0b7f1f7d0f37
}

export default User;
