
require('./spec_helper');
const assert = require('assert');
const LoginPage = require('../pages/LoginPage');

describe('Verify Login', function () {
    let login;

    beforeEach(async function () {
        login = new LoginPage(this.driver);
        await login.load();
    })

    it('with valid credentials', async function () {
        await login.authenticate('tomsmith', 'SuperSecretPassword!');
        assert(await login.successMessagePresent(), 'Success message not displayed');
    });

    it('with invalid credentials', async function () {
        await login.authenticate('invalid', 'invalid')
        assert(await login.failureMessagePresent(), 'Failure message not displayed');
    });

    it('expected failure to validate screenshot', async function () {
        await login.authenticate('invalid', 'invalid')
        assert(false, 'Expected assertion failure.');
    });
});
