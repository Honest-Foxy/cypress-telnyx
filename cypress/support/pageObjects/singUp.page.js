const page = require('./page.js');
const emailInput = '#email';
const nameInput = '#full_name';
const passwordInput = '#password';
const agreeCheckBox = '[aria-labelledby="terms-label"]';
const emailError = '#email_error';
const nameError = '#full_name_error';
const passwordErrors = '#password_requirements';
const createAccountButton = '[type="submit"]';
const googleButton = '[data-e2e="google"]';
const microsoftButton = '[data-e2e*="microsoft"]';
const signUpMessage = 'main>div>h1';
const errorMessage = '#signup-form_error';

class SignUpPage {

    enterEmail(email) {
        page.addValue(emailInput, email);
    }

    enterName(name) {
        page.addValue(nameInput, name);
    }

    enterPassword(password) {
        page.addValue(passwordInput, password);
    }

    agreeTerms() {
        page.clickElement(agreeCheckBox);
    }

    clickCreateAccountButton() {
        page.clickElement(createAccountButton);
        this.reclickCreateAccountButton();
    }

    getSignUpMessage() {
        return page.getElement(signUpMessage, 20000);
    }

    getEmailError() {
        return page.getElement(emailError);
    }

    getEmailInput() {
        return page.getElement(emailInput);
    }

    getNameInput() {
        return page.getElement(nameInput);
    }

    getNameError() {
        return page.getElement(nameError);
    }

    getPasswordInput() {
        return page.getElement(passwordInput);
    }

    getPasswordErrors() {
        return page.getElement(passwordErrors);
    }

    getGoogleButton() {
        return page.getElement(googleButton);
    }

    getMicrosoftButton() {
        return page.getElement(microsoftButton);
    }

    resetEmail(email) {
        page.resetValue(emailInput, email);
    }

    reclickCreateAccountButton() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(errorMessage).length > 0) {
                page.clickElement(createAccountButton);
            }
        })
    }

}
module.exports = new SignUpPage();