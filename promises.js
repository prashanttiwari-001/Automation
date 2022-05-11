const puppeteer = require("puppeteer");
console.log("Before");
const browserOpenPromise = puppeteer.launch({headless:false});
 browserOpenPromise
    .then(function(browser){
    // currently opened tabs
    const pagesArrPromise =browser.pages();
    return pagesArrPromise;
    })  .then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
    }).then(function(){
        // waiting for the element to appear on the page
        let elemWaitProise = page.waitForSelector(".gLFyf.gsfi",{visible:true})
        return elemWaitProise;
    })
    .then(function(){
        // console.log("Reached google home page");
        // type any element on the page -> slector
        let keysWillBeSendPromise = page.type(".gLFyf.gsfi","pepcoding");
        return keysWillBeSendPromise;
    }).then(function(){
        // page.keyboard to type special characters
        let enterWillBePressed =  page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function(){
        let elementWaitPromise = page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
        return elementWaitPromise;
    }).then(function(){
        // Mouse
        let clickOn = page.click(".LC20lb.MBeuO.DKV0Md");
        return clickOn;
    })
    .catch(function(err){
        console.log(err);
    })
console.log("after");
