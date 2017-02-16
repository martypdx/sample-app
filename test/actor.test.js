const Actor = require('../lib/models/actor');
const testInvalid = require('./test-invalid')(Actor);

describe('actor model', () => {

    it('requires a name', () => {
        return testInvalid({ dob: new Date() });
    });

    it('requires a dob', () => {
        return testInvalid({ name: 'name' });
    });

    it('is valid with name and dob', () => {
        return new Actor({ name: 'name', dob: new Date() }).validate();
    });
});