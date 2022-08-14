const page = require('./page.js');
const reasonSelector = '#Reason_for_Contact__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput = '#Email';
const websiteInput = '#Website';
const submitButton = '[type="submit"]';
const message = 'main>div>h1';

class TalkExpert {

    selectOption(option) {
        page.getElement(reasonSelector).select(option);
    }

    enterFirstName(value) {
        page.addValue(firstNameInput, value);
    }

    enterLastName(value) {
        page.addValue(lastNameInput, value);
    }

    enterEmail(email) {
        page.addValue(emailInput, email);
    }

    enterWebsite(site) {
        page.addValue(websiteInput, site);
    }

    clickSubmitButton() {
        page.clickElement(submitButton);
    }

    getMessage() {
        return page.getElement(message);
    }

}
module.exports = new TalkExpert();