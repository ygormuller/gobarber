import Sequelize, { MODEL } from  'sequelize';
class User extends Model{
  	  static init(sequelize){
	  super.init(// super chama init do Model
		{
		  name: Sequelize.STRING,
		  email: Sequelize.STRING,
		  password_hash: Sequelize.STRING,
		  provider: Sequelize.BOOLEAN,
		},
		{
		  sequelize,
		}
		);
	}
}

export default User;	
