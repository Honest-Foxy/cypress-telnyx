const mainPage = require('../support/pageObjects/main.page');
const talkExpert = require('../support/pageObjects/talkExpert.page');
const randomstring = require("randomstring");
const website = `http://www.${randomstring.generate(6)}.com/`;
const email = `${randomstring.generate(9)}@gmail.com`;
const name = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
})

before(() => {
    cy.openMainURL();
})

describe('Talk to expert check', () => {
    it('Should fill talk to an expert form with valid data', () => {
        mainPage.clickTalkToAnExpertButton();
        talkExpert.selectOption('Support');
        talkExpert.enterFirstName(name);
        talkExpert.enterLastName(name);
        talkExpert.enterEmail(email);
        talkExpert.enterWebsite(website);
        talkExpert.clickSubmitButton();
        talkExpert.getMessage().should('have.text', 'Thanks for Reaching Out!');
    })
})