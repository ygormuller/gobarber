import User from '../models/User.js';
import Notification from '../schemas/Notification.js';

class NotificationController {
	async index(req, res){
	  const checkIsProvider = await User.findOne({
	    where: { id: req.userId, provider: true },
	});

	if(!checkIsProvider) {
	  return res
	  .status(401)
	  .json({ error: 'Only provider can load notification' });
  }

	const notifications = await Notification.find({
	  user: req.userId,
	})
	  .sort({ createdAt: 'desc' })
    .limit(20);

	return res.json(notifications);
  }

  async update(req, res){
    const notifications = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
      );

    return res.json(notifications);
  }
}

export default new NotificationController();
