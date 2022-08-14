const page = require('./page.js');
const emailInput = 'form>div [name="email"]';
const passwordInput = '[name="password"]';
const forgotPasswordButton = '[href="/#/login/password-reset"]';
const logInButton = 'form>[role="button"]';
const logInerror = '[type="error"]';
const resetPasswordButton = 'div>[type="submit"]';
const resetPasswordMessage = 'span>div>div';

class LogInPage {

    enterEmail(email) {
        page.addValue(emailInput, email);
    }

    enterPassword(password) {
        page.addValue(passwordInput, password);
    }

    clickForgotPassword() {
        page.clickElement(forgotPasswordButton);
    }

    clickLogInButton() {
        page.clickElementByIndex(logInButton, 1);
    }

    getLogInError() {
        return page.getElementByIndex(logInerror, 1);
    }

    cliclResetPasswordButton() {
        page.clickElement(resetPasswordButton);
    }

    getresetPasswordMessage() {
        return page.getElement(resetPasswordMessage);
    }

}
module.exports = new LogInPage();