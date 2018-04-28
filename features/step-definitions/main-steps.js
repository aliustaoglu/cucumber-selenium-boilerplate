const { Given, When, Then, Before } = require('cucumber');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given(/^I want to login to my awesome page$/, { timeout: 20 * 1000 }, function() {
  return 'foo';
});

When(/^I type my username and password$/, { timeout: 20 * 1000 }, function() {
  return 'bar';
});

Then(/^I can see the main page$/, { timeout: 20 * 1000 }, function() {
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  return expect(this.driver.findElement(By.id('message')).getAttribute('innerHTML'))
    .to.eventually.contain('Welcome to my page!');
});
