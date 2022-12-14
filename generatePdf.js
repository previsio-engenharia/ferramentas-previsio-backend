const puppeteer = require('puppeteer');
const hb = require('handlebars');
const fs = require('fs');
const path = require('path');
const utils = require('util');

const readFile = utils.promisify(fs.readFile);

//const templatePath = "./templates/relatorio.html";

async function getTemplateHtml(tPath) {
    console.log("Loading template file in memory")
    try {
        const reportPath = path.resolve(tPath);
        return await readFile(reportPath, 'utf8');
        
    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}

async function getTemplateStyle() {
    console.log("Loading template style in memory");
    try {
        const stylePath = path.resolve('./templates/reportStyle.css');
        return await readFile(stylePath, 'utf8');        
    } catch (err) {
        return Promise.reject("Could not load css template");
    }
}


async function generatePdf(data, tPath, rPath) {
    getTemplateHtml(tPath).then(async (res) => {
        // Now we have the html code of our template in res object
        // you can check by logging it on console
        // console.log(res)

        //
        console.log("Compiling the template with handlebars");
        const template = hb.compile(res, {strict: true});
        // we have compile our code with handlebars
        const result = template(data);
        //console.log(result);
        // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
        const html = result;
        // we are using headless mode
        const browser = await puppeteer.launch();
        const page = await browser.newPage()
        // We set the page content as the generated html by handlebars
        await page.setContent(html)
        // We use pdf function to generate the pdf in the same folder as this file.
        await page.pdf({ path: rPath, format: 'A4' })
        await browser.close();
        console.log("PDF Generated")
    }).catch(err => {
        console.error(err)
    });
}

module.exports = {
    generatePdf
}