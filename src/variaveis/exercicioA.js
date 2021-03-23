function exercicioA(celsius) {
  if (typeof celsius === "number") {
    const fahrenheit = (9 * celsius + 160) / 5;
    return fahrenheit;
  } else {
    throw new Error("Please enter a number");
  }
}

module.exports = exercicioA;
