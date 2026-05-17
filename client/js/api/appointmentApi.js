import {
  getToken
}
from '../services/authService.js';

const API =
'http://localhost:5000/api/appointments';

export const getAppointments =
async () => {

  const res =
    await fetch(API, {

      headers: {
        Authorization:
        getToken()
      }
    });

  return res.json();
};


// import { getToken } from '../services/authService.js';
// const API = 'http://localhost:5000/api/appointments';

// export const getAppointments =
// async () => {

//   const res =
//     await fetch(API);

//   return res.json();
// };

// export const createAppointment =
// async (data) => {

//   const res =
//     await fetch(API, {

//       method: 'POST',

//       headers: {
//         'Content-Type':
//         'application/json'
//       },

//       body: JSON.stringify(data)
//     });

//   return res.json();
// };