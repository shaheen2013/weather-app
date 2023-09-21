const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe('Weather API', () => {
    it('should authenticate user', async () => {
        const res = await request(app).post('/login').send({ username: 'admin', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).to.have.property('token');
    });
    // ... other tests
});
