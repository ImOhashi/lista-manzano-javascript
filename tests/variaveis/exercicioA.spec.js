const exercicioA = require("../../src/variaveis/exercicioA");

describe("Convert celsius to fahrenheit", () => {
  test("it should be a number", () => {
    expect(exercicioA(15)).toEqual(59);
  });
  test("it should be a exception", () => {
    expect(() => exercicioA("test")).toThrow("Please enter a number");
  });
});
