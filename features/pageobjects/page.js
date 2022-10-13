const {By} = require("selenium-webdriver");
module.exports = {
    main_calculator() {
        return driver.$('#main_calculator')
    },

    sq_RootButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="square root"]')
    },

    twoButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="2"]')
    },

    fourButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="4"]')
    },

    plusButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="plus"]')
    },

    minusButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="minus"]')
    },

    equalsButton(){
        return driver.$('//android.widget.ImageButton[@content-desc="equals"]')
    },

    outputFieldBeforeEqual(){
        return driver.$('//*[@resource-id="com.google.android.calculator:id/formula"]')
    },
    outputFieldAfterEqual(){
        return driver.$('//*[@resource-id="com.google.android.calculator:id/result_final"]')
    }
}