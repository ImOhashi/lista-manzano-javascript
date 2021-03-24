const calculoDeVolume = require("../../src/variaveis/calculoDeVolume");

describe("Calculate the volume", () => {
  test("it should be a parameter raio", () => {
    expect(() => calculoDeVolume(1)).toThrow("Inserted parameters are invalid");
  });
  test("it should be a parameter altura", () => {
    expect(() => calculoDeVolume(null, 1)).toThrow(
      "Inserted parameters are invalid"
    );
  });
  test("it should be a correct parameters", () => {
    expect(calculoDeVolume(1, 2)).toBeCloseTo(12.57);
  });
});
