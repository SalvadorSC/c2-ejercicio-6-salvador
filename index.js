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
    (persona) => persona.paciente.edad >= 18
  );
  const nHombresDiabeticos = personas.filter(
    (persona) => persona.dieta === "Diabetes" && persona.paciente.sexo === "H"
  );
  const totalDiasIngreso = personas.reduce(
    (acumulador, persona) => acumulador + persona.diasIngresado,
    0
  );
  const mediaEdadMujeres = personas
    .filter((persona) => persona.paciente.sexo === "M")
    .reduce(
      (acumulador, persona, index, mujeresPacientes) =>
        persona.paciente.edad / mujeresPacientes.length + acumulador,
      0
    );
  const infoPacientes = {
    nPacientes,
    nMayoresEdad,
    nHombresDiabeticos: nHombresDiabeticos.length,
    totalDiasIngreso,
    mediaEdadMujeres,
  };
  console.log(infoPacientes);
  return infoPacientes;
}

informacionPacientes(pacientes);
