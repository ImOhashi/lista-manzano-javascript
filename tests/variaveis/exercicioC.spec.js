const exercicioC = require("../../src/variaveis/exercicioC");

describe("Calculate the volume", () => {
  test("it should be a parameter raio", () => {
    expect(() => exercicioC(1)).toThrow("Inserted parameters are invalid");
  });
  test("it should be a parameter altura", () => {
    expect(() => exercicioC(null, 1)).toThrow(
      "Inserted parameters are invalid"
    );
  });
  test("it should be a correct parameters", () => {
    expect(exercicioC(1, 2)).toBeCloseTo(12.57);
  });
});
