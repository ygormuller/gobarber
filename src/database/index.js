import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User.js';
import File from '../app/models/File.js';
import Appointment from '../app/models/Appointment.js';

import databaseConfig from '../config/database.js';

const models = [User, File, Appointment];
class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo(){
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/mongodb",
    {useNewUrlParser: true, useUnifiedTopology: true}
      );
    }

}

export default new Database();
