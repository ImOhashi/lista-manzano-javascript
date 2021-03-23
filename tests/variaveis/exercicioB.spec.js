const exercicioB = require("../../src/variaveis/exercicioB");

describe("Convert fahrenheit to celsius", () => {
  test("it should be a number", () => {
    expect(exercicioB(59)).toEqual(15);
  });
  test("it should be a exception", () => {
    expect(() => exercicioB("test")).toThrow("Please enter a number");
  });
});
