"use strict";

const round = (numberToRound) => Math.round(numberToRound * 10) / 10;

function calculateGrant(grade) {
  if (grade === 10) return 100;
  else if (grade >= 9) {
    return grade === 9 ? 30 : round((100 * grade) / 10);
  } else {
    return grade === 8 ? 20 : round((30 * grade) / 9);
  }
}

function appendToTable(formData) {
  const table = document.getElementById("tabla-promedios").getElementsByTagName('tbody')[0];
  const row = table.insertRow(0);
  const cellNombre = row.insertCell(0);
  const cellApellido = row.insertCell(1);
  const cellPromedio = row.insertCell(2);
  const cellBeca = row.insertCell(3);
  cellNombre.innerHTML = formData.nombre;
  cellApellido.innerHTML = formData.apellido;
  cellPromedio.innerHTML = formData.promedio;
  cellBeca.innerHTML = calculateGrant(formData.promedio);
}

function validateForm(formData) {
  if (formData.promedio < 8) {
    alert("Promedio no sujeto a beca");
    return false;
  }
  return true;
}

function processForm(form) {
  const formData = Object.fromEntries(new FormData(form).entries());
  if (validateForm(formData)) {
    appendToTable(formData);
  }
}

function inputMaxLenghtValidator(input) {
  const maxLength = input.value.includes(".")
    ? input.max.length + 1
    : input.max.length;
  if (input.value.length > maxLength)
    input.value = input.value.slice(0, input.max.length);
}
