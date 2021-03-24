const conversaoParaFahrenheit = require("../../src/variaveis/conversaoParaFahrenheit");

describe("Convert celsius to fahrenheit", () => {
  test("it should be a number", () => {
    expect(conversaoParaFahrenheit(15)).toEqual(59);
  });
  test("it should be a exception", () => {
    expect(() => conversaoParaFahrenheit("test")).toThrow("Please enter a number");
  });
});
