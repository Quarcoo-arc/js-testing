const { generateText } = require("./util");

test("should return name and age", () => {
  const text = generateText("Mike", 25);
  expect(text).toBe("Mike (25 years old)");
});
