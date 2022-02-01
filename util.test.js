const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

//Unit Test
test("should return name and age", () => {
  const text = generateText("Mike", 25);
  expect(text).toBe("Mike (25 years old)");
});

//Integration Test
test("should generate a valid text output", () => {
  const text = generateText("Mike", 25);
  expect(text).toBe("Mike (25 years old)");
});

//e2e / UI Test
test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();
  await page.goto(
    "file:///D:/Documents/Coding%20practice/JS/testing-01-starting-setup/index.html"
  );

  await page.click("input#name");
  await page.type("input#name", "Ephraim");
  await page.click("input#age");
  await page.type("input#age", "22");
  await page.click("#btnAddUser");

  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Ephraim (22 years old)");
}, 10000);
