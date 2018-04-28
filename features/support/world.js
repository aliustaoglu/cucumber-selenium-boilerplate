const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

var { setWorldConstructor, Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require('cucumber')
setDefaultTimeout(20 * 1000)

function CustomWorld(callback) {
    this.driver = new webdriver.Builder().forBrowser('chrome').build()
}

Before(function(testCase, callback) {
    console.log('Cucumber initializing login')
    const driver = this.driver
    driver.get('http://localhost:3003').then(function(res) {
        driver
            .findElement(By.id('username'))
            .sendKeys('cuneyt')
            .then(() => driver.findElement(By.id('password')).sendKeys('sifre123'))
            .then(() => driver.findElement(By.id('btn')).click())
            .then(() => {
                driver.wait(until.elementLocated(By.id('message'))).then(() => {
                    console.log('Page login is successful. Ready to test features')
                    callback()
                }, 1000)
            })
    })
})

After(function() {
    console.log('Cucumber finished all features. Closing browser')
    const driver = this.driver
    return driver.close()
})

setWorldConstructor(CustomWorld)
