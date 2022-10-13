const { Given, When, Then, Before, After, } = require('@wdio/cucumber-framework');
const {By} = require("selenium-webdriver");
const expect = require('chai').expect;

const page = require('../pageobjects/page')

Before(async function () {
})

After('', async () => {
     await driver.reloadSession()
})

Given('I am on the calculator app', async () => {
     expect(await page.main_calculator()).to.exist
})

Given(/^I click on the square root button$/, async function () {
     await page.sq_RootButton().click()
});
Then(/^Square root displays on the calculator$/, async function () {
     expect(await page.outputFieldBeforeEqual().getAttribute('text')).to.equal('√')
});
Given('I click on the 2 button', async function () {
     await page.twoButton().click()
});

Given(/^I click on the plus button$/, async function () {
     await page.plusButton().click()
});

Given('I click on the 4 button', async () => {
     await page.fourButton().click()
})
When(/^I click on the equals button$/, async function () {
     await page.equalsButton().click()
});
Then(/^(\d+) is displayed on the calculator$/, async function (num) {
     expect(await page.outputFieldAfterEqual().getAttribute('text')).to.equal(num.toString())
});
Given(/^I click on the minus button$/, async function () {
     await page.minusButton().click()
});
Then(/^\-2 is displayed on the calculator$/, async function () {
     expect(await page.outputFieldAfterEqual().getAttribute('text')).to.equal('−2')
});