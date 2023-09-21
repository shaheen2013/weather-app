const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('Weather API', () => {
    it('should authenticate user', async () => {
        const res = await request(app).post('/login').send({ username: 'admin', password: 'password' });
        expect(res.statusCode).equal(200);
        expect(res.body).to.have.property('token');
    });
});
