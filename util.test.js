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
