function exercicioC(raio, altura) {
  if (typeof raio !== "number" || typeof altura !== "number") {
    throw new Error("Inserted parameters are invalid");
  } else {
    const volume = Math.PI * Math.pow(2, raio) * altura;

    return parseFloat(volume.toFixed(2));
  }
}

module.exports = exercicioC;
