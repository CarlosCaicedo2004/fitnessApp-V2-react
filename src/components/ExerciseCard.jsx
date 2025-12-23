export default function ExerciseCard({ exercise, intensity }) {
  const data = exercise.intensity[intensity];

  if (!data) return null;

  return (
    <div className="exercise-card">
      {/* HEADER */}
      <div className="exercise-header">
        <h4 className="exercise-name">{exercise.name}</h4>
        <span className="exercise-muscle">{exercise.muscle}</span>
      </div>

      {/* BODY */}
      <div className="exercise-body">
        <div className="exercise-stat">
          <span className="stat-label">Series</span>
          <span className="stat-value">{data.sets}</span>
        </div>

        <div className="exercise-stat">
          <span className="stat-label">Reps</span>
          <span className="stat-value">{data.reps}</span>
        </div>

        <div className="exercise-stat">
          <span className="stat-label">Descanso</span>
          <span className="stat-value">{data.rest}</span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="exercise-footer">
        <span className="equipment">
          🏋️ {exercise.equipment}
        </span>
      </div>
    </div>
  );
}
