import ExerciseCard from "./ExerciseCard";

export default function ExerciseList({ exercises, intensity }) {
  if (!exercises || exercises.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay ejercicios para este día.</p>
      </div>
    );
  }

  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          intensity={intensity}
        />
      ))}
    </div>
  );
}
