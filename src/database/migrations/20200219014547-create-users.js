<<<<<<< HEAD
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
=======
module.exports={
	up:(queryInterface,Sequelize)=>{
		return queryInterface.createTable('users', {
		 id: {
		  type: Sequelize.INTEGER,
		  allowNull: false,
		  autoIncrement: true,
		  primaryKey: true,
		},
		name:{
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		email: {
		  type: Sequelize.STRING,
		  allowNull: false,
		  unique: true,
		},
		password_hash:{
		  type: Sequelize.STRING,
		  allowNull: false,
		},
		provider:{
		  type: Sequelize.BOOLEAN,
		  defaultValue: false,
		  allowNull: false,
		},
		created_at:{
		  type:Sequelize.DATE,
		  allowNull: false,
		},
		updated_at:{
		 type:Sequelize.DATE,
		 allowNull: false,
		},
	});
},
		down: queryInterface=>{
		  return queryInterface.dropTable('users');
		},
	};
>>>>>>> 00e0613de10b459aad39c24aae0a0b7f1f7d0f37
