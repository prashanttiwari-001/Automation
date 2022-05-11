const puppeteer = require("puppeteer");
const browserOpenPromise = puppeteer.launch({headless:false,slowMo:true,defaultViewport:null});
browserOpenPromise

    .then(function(browser){
        const pagesArrPromise = browser.pages();
        return pagesArrPromise;
    }).then(function(browserPages){
        page = browserPages[0];
        const gotoGoogle = page.goto("https://www.google.com/");
        return  gotoGoogle;
    }).then(function(){
        let elemWaitPromise = page.waitForSelector(".gLFyf.gsfi",{visible:true});
        return elemWaitPromise; 
    }).then(function(){
        let typeYoutube = page.type(".gLFyf.gsfi","youtube");
        return typeYoutube;
    }).then(function(){
        let enterOnYoutube = page.keyboard.press("Enter");
        return enterOnYoutube;
    }).then(function(){
        let waitForTiming = page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
        return waitForTiming;
    }).then(function(){
        let clickOnYoutube = page.click(".LC20lb.MBeuO.DKV0Md");
        return clickOnYoutube;
    })





