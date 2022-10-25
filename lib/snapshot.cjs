const puppeteer = require('puppeteer')

const snapshot = async (
    url = 'https://google.com',
    path = 'screenshot.png',
    options = {}
) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    console.log('url:', url)
    try {
        await page.goto(url)
        await page.screenshot({ ...options, path: path })
    } catch (e) {
        throw e
    } finally {
        await browser.close()
    }
}

module.exports = snapshot
