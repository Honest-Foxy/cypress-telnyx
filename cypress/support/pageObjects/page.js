class Page {

    openURL(url) {
        cy.visit(url == undefined ? '/' : url);
    }

    getElement(element, timeout = 4000) {
        return cy.get(element, { timeout: timeout });
    }

    getElementByIndex(element, index) {
        return cy.get(element).eq(index);
    }

    getElementByText(text) {
        return cy.contains(text);
    }

    clickElement(element) {
        this.getElement(element).click();
    }

    clickElementByIndex(element, index) {
        this.getElementByIndex(element, index).click();
    }

    clickElementByText(text) {
        this.getElementByText(text).click();
    }

    addValue(element, text) {
        this.getElement(element).type(text);
    }

    hoverMouseByIndex(element, index) {
        this.getElementByIndex(element, index).realHover();
    }

    hoverMouse(element) {
        this.getElement(element).realHover();
    }

    resetValue(element, value) {
        this.getElement(element).clear().type(value);
    }

}
module.exports = new Page();