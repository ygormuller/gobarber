import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      // super chama init do Model
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },

      {
        sequelize,
      }
    );

    return this;
  }

  static associete(models){
    this.belongsTo(models.User, { foreingnKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
