const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

function informacionPacientes(personas) {
  const nPacientes = personas.length;
  const nMayoresEdad = personas.filter(
    ({ paciente: { edad } }) => edad >= 18
  ).length;
  const nHombresDiabeticos = personas.filter(
    ({ paciente, dieta }) => dieta === "Diabetes" && paciente.sexo === "H"
  ).length;
  const totalDiasIngreso = personas.reduce(
    (acumulador, { diasIngresado }) => acumulador + diasIngresado,
    0
  );
  const mediaEdadMujeres = personas
    .filter(({ paciente: { sexo } }) => sexo === "M")
    .reduce(
      (acumulador, { paciente: { edad } }, index, mujeresPacientes) =>
        edad / mujeresPacientes.length + acumulador,
      0
    );
  const infoPacientes = {
    nPacientes,
    nMayoresEdad,
    nHombresDiabeticos,
    totalDiasIngreso,
    mediaEdadMujeres,
  };
  console.log(infoPacientes);
  return infoPacientes;
}

informacionPacientes(pacientes);
