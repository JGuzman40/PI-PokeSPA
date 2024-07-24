const { Type, conn } = require('../../db');
const { expect } = require('chai');

describe('Type model', () => {
    before(() => conn.authenticate()
    .catch((error) => {
        console.error('Unable to conect to the database', error);
    }));

    describe('Validators', () => {
        beforeEach(() => Type.sync({ force: true }));
        describe('name', () => {
            it('should throw an error if name is null', function (done) {
                this.timeout(5000);

                Type.create({})
                    .then(() => done(new Error('It require a valid name')))
                    .catch((error) => {
                        try {
                            expect(error.message).to.include("notNull Violation: Type.name cannot be null");
                            done();
                        } catch (error) {
                            done(error)
                        }
                    });
            });

            it('should work when its a valid name', () => {
                return Type.create({ name: 'Fire' })
                    .then((type) => {
                        expect(type.name).to.equal('Fire');
                    });
            });
        });
    });
});