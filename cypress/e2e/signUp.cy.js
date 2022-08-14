const mainPage = require('../support/pageObjects/main.page');
const signUpPage = require('../support/pageObjects/singUp.page');
const randomstring = require("randomstring");
const validEmail1 = `${randomstring.generate(9)}@gmail.com`;
const validEmail2 = `${randomstring.generate(9)}@gmail.com`;
const validEmail3 = `${randomstring.generate(9)}@gmail.com`;
const validName = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})
const validPassword = `${randomstring.generate(10)}!A1`;
const invalidEmail = randomstring.generate(9);
const invalidPassword = randomstring.generate({
    length: 9,
    charset: 'alphabetic',
    capitalization: 'lowercase'
});

beforeEach(() => {
    cy.openMainURL();
})

describe('Sing up check', () => {
    it('Should sign up with invalid data', () => {
        mainPage.clickSignUpHeaderButton();
        signUpPage.enterEmail(invalidEmail);
        signUpPage.enterPassword(invalidPassword);
        signUpPage.clickCreateAccountButton();
        signUpPage.getEmailInput().should('have.attr', 'aria-invalid');
        signUpPage.getEmailError().should('have.text', `Please enter a valid email address.`);
        signUpPage.getNameInput().should('have.attr', 'aria-invalid');
        signUpPage.getNameError().should('have.text', `This field is required.`);
        signUpPage.getPasswordInput().should('have.attr', 'aria-invalid');
        signUpPage.getPasswordErrors()
            .should('have.text', `Password must:Be at least 12 characters longContain at least one numberContain at least one symbolContain at least one upper-case letter`);
    })

    it('Should check are clickable Sign up with Google and Microsoft buttons', () => {
        mainPage.clickSignUpHeaderButton();
        signUpPage.getGoogleButton().should('not.be.disabled');
        signUpPage.getMicrosoftButton().should('not.be.disabled');
    })

    it('Should sign up from the homepage banner', () => {
        mainPage.enterEmail(validEmail2);
        mainPage.clickTryForFreeButton();
        signUpPage.resetEmail(validEmail2);
        signUpPage.enterName(validName);
        signUpPage.enterPassword(validPassword);
        signUpPage.agreeTerms();
        signUpPage.clickCreateAccountButton();
        signUpPage.getSignUpMessage().should('have.text', `We've sent you an email to activate your account`);
    })

    it('Should sign up from the footer banner', () => {
        mainPage.clickStartFreeTrialButton();
        signUpPage.enterEmail(validEmail3);
        signUpPage.enterName(validName);
        signUpPage.enterPassword(validPassword);
        signUpPage.agreeTerms();
        signUpPage.clickCreateAccountButton();
        signUpPage.getSignUpMessage().should('have.text', `We've sent you an email to activate your account`);
    })

    it('Should sign up with valid data', () => {
        mainPage.clickSignUpHeaderButton();
        signUpPage.enterEmail(validEmail1);
        signUpPage.enterName(validName);
        signUpPage.enterPassword(validPassword);
        signUpPage.agreeTerms();
        signUpPage.clickCreateAccountButton();
        signUpPage.getSignUpMessage().should('have.text', `We've sent you an email to activate your account`);
    })
})