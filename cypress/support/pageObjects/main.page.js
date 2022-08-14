const page = require('./page.js');
const signUpHeaderButton = 'header li [href="/sign-up"]';
const logInHeaderButton = '[href*="https://portal.telnyx.com/"]';
const talkToAnExpertButton = 'li [href="/contact-us"]';
const navigationMenuButtons = 'header span>span';
const navigationMenuDropDowns = 'header ul>li>div>div';
const emailInput = '[type="email"]';
const tryForFreeButton = '[type="submit"]';
const startYourFreeTrialButton = 'main a[href="/sign-up"]';
const closeAndDenyButton = '[aria-label="close and deny"]';
const header = 'body>div>div>header';

class MainPage {

    openMainURL() {
        page.openURL();
    }

    denyCookies() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(closeAndDenyButton).length > 0) {
                page.clickElement(closeAndDenyButton);
            }
        })
    }

    clickSignUpHeaderButton() {
        page.clickElement(signUpHeaderButton);
    }

    clickLogInButton() {
        page.clickElementByIndex(logInHeaderButton, 0);
    }

    clickTalkToAnExpertButton() {
        page.clickElement(talkToAnExpertButton);
    }

    clickTryForFreeButton() {
        page.clickElement(tryForFreeButton);
    }

    clickStartFreeTrialButton() {
        page.clickElement(startYourFreeTrialButton);
    }

    hoverNavigationMenuButtons(index) {
        page.hoverMouseByIndex(navigationMenuButtons, index);
    }

    hoverHeader() {
        page.hoverMouse(header);
    }

    getMenuDropDowns(index) {
        return page.getElementByIndex(navigationMenuDropDowns, index);
    }

    enterEmail(email) {
        page.addValue(emailInput, email);
    }

}
module.exports = new MainPage();