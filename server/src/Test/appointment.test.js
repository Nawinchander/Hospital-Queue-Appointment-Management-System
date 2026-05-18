const request =
require('supertest');

const app =
require('../server');

describe(
'Appointment API',

() => {

  test(
    'GET appointments',

    async () => {

      const res =
        await request(app)
        .get('/api/appointments');

      expect(
        res.statusCode
      ).toBe(200);
    }
  );
});