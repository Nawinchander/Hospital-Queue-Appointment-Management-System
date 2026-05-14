const Appointment =
require('../models/Appointment');

exports.createAppointment =
async (req, res) => {

  try {

    const appointment =
      await Appointment.create(req.body);

    res.status(201)
      .json(appointment);

  } catch (err) {

    res.status(500)
      .json(err);
  }
};

exports.getAppointments =
async (req, res) => {

  try {

    const appointments =
      await Appointment.find()
      .sort({ priority: -1 });

    res.json(appointments);

  } catch (err) {

    res.status(500)
      .json(err);
  }
};