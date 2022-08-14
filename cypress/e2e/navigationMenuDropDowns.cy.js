const mainPage = require('../support/pageObjects/main.page');

before(() => {
    cy.openMainURL();
})

describe('Check navigation menu drop-downs', () => {
    it('Should check is drop-down shown after hovering mouse', () => {
        for (let i = 4; i >= 0; i--) {
            mainPage.hoverHeader();
            mainPage.hoverNavigationMenuButtons(i);
            cy.wait(500);
            mainPage.getMenuDropDowns(i).should('be.visible');
        }
    })
})