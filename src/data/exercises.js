export const exercises = [
  // =========================
  // PECHO
  // =========================
  {
    id: "bench_press",
    name: "Press Banca Plano",
    muscle: "Pecho",
    equipment: "Barra",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "incline_press",
    name: "Press Inclinado",
    muscle: "Pecho",
    equipment: "Mancuernas",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "pec_deck",
    name: "Pec Deck",
    muscle: "Pecho",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 3, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15-20", rest: "45 sec" },
    },
  },

  // =========================
  // ESPALDA
  // =========================
  {
    id: "lat_pulldown",
    name: "Jalón al Pecho (Prono)",
    muscle: "Espalda",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "machine_row",
    name: "Remo en Máquina",
    muscle: "Espalda",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "barbell_row_wide",
    name: "Remo con Barra Agarre Abierto",
    muscle: "Espalda Alta",
    equipment: "Barra",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "pullover",
    name: "Pullover",
    muscle: "Espalda",
    equipment: "Mancuerna / Polea",
    intensity: {
      heavy: { sets: 3, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15-20", rest: "45 sec" },
    },
  },

  // =========================
  // BÍCEPS
  // =========================
  {
    id: "barbell_curl",
    name: "Curl con Barra en Polea",
    muscle: "Bíceps",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "90 sec" },
      medium: { sets: 3, reps: "10-12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },
  {
    id: "hammer_curl",
    name: "Curl Martillo",
    muscle: "Bíceps",
    equipment: "Mancuernas",
    intensity: {
      heavy: { sets: 3, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },
  {
    id: "bayesian_curl",
    name: "Curl Bayesian",
    muscle: "Bíceps",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 3, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },

  // =========================
  // TRÍCEPS
  // =========================
  {
    id: "tricep_pushdown",
    name: "Extensión de Tríceps con Barra",
    muscle: "Tríceps",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "90 sec" },
      medium: { sets: 3, reps: "10-12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },
  {
    id: "single_arm_tricep",
    name: "Extensión Unilateral en Polea",
    muscle: "Tríceps",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 3, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },
  {
    id: "french_press",
    name: "Press Francés",
    muscle: "Tríceps",
    equipment: "Barra / Mancuerna",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "90 sec" },
      medium: { sets: 3, reps: "10-12", rest: "60 sec" },
      light: { sets: 3, reps: "15", rest: "45 sec" },
    },
  },

  // =========================
  // HOMBRO
  // =========================
  {
    id: "military_press",
    name: "Press Militar",
    muscle: "Hombro",
    equipment: "Barra",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2 min" },
      medium: { sets: 4, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "lateral_raise",
    name: "Elevaciones Laterales (Drop Set)",
    muscle: "Hombro",
    equipment: "Mancuernas",
    intensity: {
      heavy: { sets: 3, reps: "10-20", rest: "60 sec" },
      medium: { sets: 3, reps: "12-15", rest: "45 sec" },
      light: { sets: 3, reps: "20", rest: "30 sec" },
    },
  },
  {
    id: "face_pull",
    name: "Face Pull",
    muscle: "Hombro Posterior",
    equipment: "Polea",
    intensity: {
      heavy: { sets: 3, reps: "10-12", rest: "60 sec" },
      medium: { sets: 3, reps: "12-15", rest: "45 sec" },
      light: { sets: 3, reps: "20", rest: "30 sec" },
    },
  },

  // =========================
  // PIERNA – CUÁDRICEPS
  // =========================
  {
    id: "squat",
    name: "Sentadilla Libre",
    muscle: "Cuádriceps",
    equipment: "Barra",
    intensity: {
      heavy: { sets: 5, reps: "5-6", rest: "3 min" },
      medium: { sets: 4, reps: "8-10", rest: "2 min" },
      light: { sets: 3, reps: "12-15", rest: "90 sec" },
    },
  },
  {
    id: "bulgarian_split_squat",
    name: "Sentadilla Búlgara",
    muscle: "Cuádriceps / Glúteo",
    equipment: "Mancuernas",
    intensity: {
      heavy: { sets: 4, reps: "8", rest: "2 min" },
      medium: { sets: 3, reps: "10-12", rest: "90 sec" },
      light: { sets: 3, reps: "15", rest: "60 sec" },
    },
  },
  {
    id: "leg_extension",
    name: "Extensión de Pierna",
    muscle: "Cuádriceps",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 3, reps: "10", rest: "90 sec" },
      medium: { sets: 3, reps: "12-15", rest: "60 sec" },
      light: { sets: 3, reps: "20", rest: "45 sec" },
    },
  },
  {
    id: "leg_press",
    name: "Prensa",
    muscle: "Cuádriceps",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 4, reps: "8-10", rest: "2 min" },
      medium: { sets: 4, reps: "12", rest: "90 sec" },
      light: { sets: 3, reps: "15-20", rest: "60 sec" },
    },
  },

  // =========================
  // FEMORAL / GLÚTEO
  // =========================
  {
    id: "seated_leg_curl",
    name: "Femoral Sentado",
    muscle: "Femoral",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 4, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15-20", rest: "45 sec" },
    },
  },
  {
    id: "lying_leg_curl",
    name: "Femoral Acostado",
    muscle: "Femoral",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 4, reps: "8-10", rest: "90 sec" },
      medium: { sets: 3, reps: "12", rest: "60 sec" },
      light: { sets: 3, reps: "15-20", rest: "45 sec" },
    },
  },
  {
    id: "romanian_deadlift",
    name: "Peso Muerto Rumano",
    muscle: "Glúteo / Femoral",
    equipment: "Barra",
    intensity: {
      heavy: { sets: 4, reps: "6-8", rest: "2-3 min" },
      medium: { sets: 4, reps: "10", rest: "2 min" },
      light: { sets: 3, reps: "12-15", rest: "90 sec" },
    },
  },

  // =========================
  // PANTORRILLA
  // =========================
  {
    id: "standing_calf_raise",
    name: "Pantorrilla de Pie",
    muscle: "Pantorrilla",
    equipment: "Máquina / Barra",
    intensity: {
      heavy: { sets: 4, reps: "10-12", rest: "60 sec" },
      medium: { sets: 4, reps: "15", rest: "45 sec" },
      light: { sets: 3, reps: "20-25", rest: "30 sec" },
    },
  },
  {
    id: "seated_calf_raise",
    name: "Pantorrilla Sentado",
    muscle: "Pantorrilla",
    equipment: "Máquina",
    intensity: {
      heavy: { sets: 4, reps: "12", rest: "60 sec" },
      medium: { sets: 4, reps: "15-20", rest: "45 sec" },
      light: { sets: 3, reps: "25", rest: "30 sec" },
    },
  },
];
