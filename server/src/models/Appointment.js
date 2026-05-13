const mongoose = require('mongoose');

const appointmentSchema =
new mongoose.Schema({

  patientName: String,

  doctorName: String,

  tokenNumber: Number,

  priority: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: [
      'waiting',
      'completed'
    ],
    default: 'waiting'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports =
mongoose.model(
  'Appointment',
  appointmentSchema
);