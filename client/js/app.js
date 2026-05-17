import { getAppointments, createAppointment } from './api/appointmentApi.js';

import socket from './services/socketService.js';

const patient =
document.getElementById(
  'patient'
);

const doctor =
document.getElementById(
  'doctor'
);

const bookBtn =
document.getElementById(
  'bookBtn'
);

const queueList =
document.getElementById(
  'queueList'
);

const renderAppointment =
(appointment) => {

  const div =
    document.createElement('div');

  div.className =
    'queue-card';

  div.innerHTML = `
    <h3>
      ${appointment.patientName}
    </h3>

    <p>
      Doctor:
      ${appointment.doctorName}
    </p>

    <p>
      Token:
      ${appointment.tokenNumber}
    </p>
  `;

  queueList.appendChild(div);
};

const loadAppointments =
async () => {

  const appointments =
    await getAppointments();

  appointments.forEach(
    renderAppointment
  );
};

bookBtn
.addEventListener(
'click',

async () => {

  const appointment = {

    patientName:
      patient.value,

    doctorName:
      doctor.value
  };

  const saved =
    await createAppointment(
      appointment
    );

  renderAppointment(saved);
});

loadAppointments();

