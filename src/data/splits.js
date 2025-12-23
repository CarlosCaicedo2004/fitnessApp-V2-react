export const splits = [
  // =========================
  // ARNOLD SPLIT
  // =========================
  {
    id: "arnold",
    name: "Arnold Split",
    description: "Alto volumen, enfoque clásico",
    days: [
      {
        id: "arnold_day_1",
        name: "Pecho + Espalda",
        exercises: [
          "bench_press",
          "incline_press",
          "pec_deck",
          "lat_pulldown",
          "machine_row",
          "barbell_row_wide",
          "pullover",
        ],
      },
      {
        id: "arnold_day_2",
        name: "Bíceps + Tríceps + Hombro",
        exercises: [
          "barbell_curl",
          "hammer_curl",
          "bayesian_curl",
          "tricep_pushdown",
          "single_arm_tricep",
          "french_press",
          "military_press",
          "lateral_raise",
          "face_pull",
        ],
      },
      {
        id: "arnold_day_3",
        name: "Pierna Completa",
        exercises: [
          "squat",
          "bulgarian_split_squat",
          "leg_extension",
          "leg_press",
          "seated_leg_curl",
          "lying_leg_curl",
          "romanian_deadlift",
          "standing_calf_raise",
          "seated_calf_raise",
        ],
      },
    ],
  },

  // =========================
  // PUSH PULL LEGS
  // =========================
  {
    id: "ppl",
    name: "Push / Pull / Legs",
    description: "Equilibrio y recuperación",
    days: [
      {
        id: "push",
        name: "Push (Pecho, Hombro, Tríceps)",
        exercises: [
          "bench_press",
          "incline_press",
          "pec_deck",
          "military_press",
          "lateral_raise",
          "tricep_pushdown",
          "french_press",
        ],
      },
      {
        id: "pull",
        name: "Pull (Espalda, Bíceps)",
        exercises: [
          "lat_pulldown",
          "machine_row",
          "barbell_row_wide",
          "pullover",
          "barbell_curl",
          "hammer_curl",
          "bayesian_curl",
        ],
      },
      {
        id: "legs",
        name: "Pierna",
        exercises: [
          "squat",
          "bulgarian_split_squat",
          "leg_extension",
          "leg_press",
          "seated_leg_curl",
          "lying_leg_curl",
          "romanian_deadlift",
          "standing_calf_raise",
          "seated_calf_raise",
        ],
      },
    ],
  },

  // =========================
  // UPPER / LOWER
  // =========================
  {
    id: "upper_lower",
    name: "Upper / Lower",
    description: "Fuerza + hipertrofia",
    days: [
      {
        id: "upper",
        name: "Upper Body",
        exercises: [
          "bench_press",
          "incline_press",
          "lat_pulldown",
          "machine_row",
          "military_press",
          "barbell_curl",
          "tricep_pushdown",
          "face_pull",
        ],
      },
      {
        id: "lower",
        name: "Lower Body",
        exercises: [
          "squat",
          "bulgarian_split_squat",
          "leg_extension",
          "leg_press",
          "seated_leg_curl",
          "lying_leg_curl",
          "romanian_deadlift",
          "standing_calf_raise",
          "seated_calf_raise",
        ],
      },
    ],
  },

  // =========================
  // LIBRE
  // =========================
  {
    id: "free",
    name: "Libre",
    description: "Escoge músculos a tu gusto",
    days: [
      {
        id: "free_day",
        name: "Entrenamiento Libre",
        exercises: [
          "bench_press",
          "incline_press",
          "lat_pulldown",
          "machine_row",
          "barbell_curl",
          "tricep_pushdown",
          "military_press",
          "squat",
        ],
      },
    ],
  },
];
