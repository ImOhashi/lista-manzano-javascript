const conversaoParaCelsius = require("../../src/variaveis/conversaoParaCelsius");

describe("Convert fahrenheit to celsius", () => {
  test("it should be a number", () => {
    expect(conversaoParaCelsius(59)).toEqual(15);
  });
  test("it should be a exception", () => {
    expect(() => conversaoParaCelsius("test")).toThrow("Please enter a number");
  });
});
