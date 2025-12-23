export default function DaySelector({ days, selectedDay, onSelectDay }) {
  return (
    <div className="day-selector">
      <h3 className="section-title">Selecciona el día de entrenamiento</h3>

      <div className="day-buttons">
        {days.map((day, index) => (
          <button
            key={day.id}
            className={`day-btn ${
              selectedDay === day.id ? "active" : ""
            }`}
            onClick={() => onSelectDay(day.id)}
          >
            <span className="day-index">Día {index + 1}</span>
            <span className="day-name">{day.name}</span>
            <span className="day-count">
              {day.exercises.length} ejercicios
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
