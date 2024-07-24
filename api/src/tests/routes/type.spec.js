const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe('Rutas de Tipo', function () {
    this.timeout(5000);
    it('GET /types should return a Pokemon Types List', async () => {
        const response = await request.get('/types');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });
    it('GET /types should return an error if something fail', async () => {
        const response = await request.get('/types/invalidendpoint');
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('error', 'Not Found');
    });
});