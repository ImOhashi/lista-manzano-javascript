function conversaoParaCelsius(fahrenheit) {
  if (typeof fahrenheit === "number") {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  } else {
    throw new Error("Please enter a number");
  }
}

module.exports = conversaoParaCelsius;
