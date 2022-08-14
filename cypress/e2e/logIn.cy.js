const mainPage = require('../support/pageObjects/main.page');
const signUpPage = require('../support/pageObjects/singUp.page');
const logInPage = require('../support/pageObjects/logIn.page');
const randomstring = require("randomstring");
const invalidData = `${randomstring.generate(6)}@gmail.com`;
const validEmail = `${randomstring.generate(9)}@gmail.com`;
const validName = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})
const validPassword = `${randomstring.generate(10)}!A1`;

beforeEach(() => {
    cy.openMainURL();
})

describe('Log in check', () => {
    it('Should log in with valid data', () => {
        mainPage.clickSignUpHeaderButton();
        signUpPage.enterEmail(validEmail);
        signUpPage.enterName(validName);
        signUpPage.enterPassword(validPassword);
        signUpPage.agreeTerms();
        signUpPage.clickCreateAccountButton();
        mainPage.clickLogInButton();
        logInPage.enterEmail(validEmail);
        logInPage.enterPassword(validPassword);
        logInPage.clickLogInButton();
        logInPage.getLogInError().each(x => {
            expect(x.text()).to.be.oneOf([
                "Your account has been blocked. Please contact Telnyx support for information regarding your account.",
                "You must confirm your email before you can sign in. Please contact support if you are unable to do this."
            ]);
        });
    })

    it('Should log in with invalid data', () => {
        mainPage.clickLogInButton();
        logInPage.enterEmail(invalidData);
        logInPage.enterPassword(invalidData);
        logInPage.clickLogInButton();
        logInPage.getLogInError().should('have.text', `That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.`);
    })

    it('Should check forgot password', () => {
        mainPage.clickLogInButton();
        logInPage.clickForgotPassword();
        logInPage.enterEmail(validEmail);
        logInPage.cliclResetPasswordButton();
        logInPage.getresetPasswordMessage().should('have.text', `We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.`);
    })
})