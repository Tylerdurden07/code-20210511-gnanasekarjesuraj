
import request from 'supertest'
import {Express} from 'express-serve-static-core'

import {createServer} from '../../Utils/Server';

let server: Express
let payload = [{
    Gender: "Male", HeightCm: 175, WeightKg: 75 
}];

const response = {
       numOfOverWeight: 0,
       updatePersons:  [
          {
           Bmi: 24.49,
           BmiCategory: "Normal Weight",
           Gender: "Male",
           HealthRisk: "Low risk",
           HeightCm: 175,
           WeightKg: 75
         }
       ]
      }

beforeAll(async () => {
  server = await createServer()

})

describe('POST /bmi', () => {
  it('should return 200 & valid response when valid payload is given', async done => {
    request(server)
      .post(`/app-server/api/v1/bmi`)
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject(response)
        done()
      })
  });

  it('should return 400 & invalid response when invalid payload given' , async done => {
    request(server)
      .post(`/app-server/api/v1/bmi`)
      .send({})
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
          done();
      })
  });

})