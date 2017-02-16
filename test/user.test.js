const User = require('../lib/models/user');
const testInvalid = require('./test-invalid')(User);
const assert = require('chai').assert;

describe('user model', () => {

    it('requires a username', () => {
        return testInvalid({ password: 'abc' });
    });

    it('requires a hash via password', () => {
        return testInvalid({ username: 'username' });
    });

    it('is valid with username and password', () => {
        return new User({ username: 'username', password: 'abc' }).validate();
    });

    it('sets hash from password and correctly compares', () => {
        const data = { username: 'username', password: 'abc' };
        const user = new User(data);
        
        assert.isUndefined(user.password);
        assert.notEqual(user.hash, data.password);

        assert.isTrue(user.comparePassword('abc'));
        assert.isFalse(user.comparePassword('not the password'));
    });
});