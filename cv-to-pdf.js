const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = "file://" + path.resolve(__dirname, "cven.html");

  await page.goto(filePath, { waitUntil: "networkidle0" });

  await page.emulateMediaType("print");

  await page.pdf({
    path: "cven.pdf",
    format: "A3",
    scale: 1,
    printBackground: true,
    preferCSSPageSize: true
  });

  await browser.close();
})();
