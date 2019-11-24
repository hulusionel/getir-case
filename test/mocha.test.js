const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe('Test the invalid requests', () => {
    it('Invalid endpoint it should response 404', done => {
        chai.request(app)
            .get('/find')
            .send({
                startDate: '2016-01-26',
                endDate: '2018-02-02',
                minCount: 2700,
                maxCount: 3000
            })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('Invalid params it should response 400', done => {
        chai.request(app)
            .post('/find')
            .send({ foo: 'bar' })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('Invalid params it should response 400 - 2', done => {
        chai.request(app)
            .post('/find')
            .send({
                startDate: 'bar',
                endDate: 0,
                minCount: '...',
                maxCount: ''
            })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
});

describe('Test main endpoint', () => {
    it('It should response with Success', done => {
        chai.request(app)
            .post('/find')
            .send({
                startDate: '2016-01-26',
                endDate: '2018-02-02',
                minCount: 2700,
                maxCount: 3000
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('code');
                res.body.should.have.property('msg');
                res.body.should.have.property('records');
                done();
            });
    });
});