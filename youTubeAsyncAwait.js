
const puppeteer = require("puppeteer");
(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        slowMo:150,
        defaultViewport:null,
         args:["--start-maximized"]
    })
    let newPage = await browser.newPage();
    await newPage.goto("https://www.google.com/");
    await newPage.type(".gLFyf.gsfi","youTube");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
    await newPage.click(".LC20lb.MBeuO.DKV0Md");
    await newPage.waitForSelector("#search-input","pepcoding javaScript",
    {
        visible:true
    });
    await newPage.click("#search-input");
    await newPage.type("#search-input","pepcoding javaScript");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector("a#video-title",{visible:true});
    let arrOfVideo = await newPage.$$("a#video-title");
    arrOfVideo[2].click();
    // await window.scrollBy(0, window.innerHeight);
    // await newPage.waitForSelector(".style-scope.ytd-playlist-renderer",{visible:true});
    // await newPage.click(".style-scope.ytd-playlist-renderer");
    
})();



