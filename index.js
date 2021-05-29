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
  const numPacientes = personas.length;
  const numMayoresEdad = personas.filter(
    (persona) => persona.paciente.edad >= 18
  );
  const numHombresDiabeticos = personas.filter(
    (persona) => persona.dieta === "Diabetes" && persona.paciente.sexo === "H"
  );
  const totalDiasIngresados = personas.reduce(
    (acumulador, persona) => acumulador + persona.diasIngresado,
    0
  );
  const mediaEdadMuj = personas
    .filter((persona) => persona.paciente.sexo === "M")
    .reduce(
      (acumulador, persona, index, mujeresPacientes) =>
        persona.paciente.edad / mujeresPacientes.length + acumulador,
      0
    );
  const infoPacientes = {
    nPacientes: numPacientes,
    nMayoresEdad: numMayoresEdad,
    nHombresDiabeticos: numHombresDiabeticos.length,
    totalDiasIngreso: totalDiasIngresados,
    mediaEdadMujeres: mediaEdadMuj,
  };
  console.log(infoPacientes);
  return infoPacientes;
}

informacionPacientes(pacientes);
