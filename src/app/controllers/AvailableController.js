import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';

class AvailableController {
  async index(req,res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date'});
    }
    const searchDate = Number(date);

    const appointments = await Appointments.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchdate)],
        },
      },
    });

    return res.json();
  }
}

export default new AvailableController();
