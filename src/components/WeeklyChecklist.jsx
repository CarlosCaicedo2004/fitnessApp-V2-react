import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function WeeklyChecklist({ split }) {
  const storageKey = `checklist-${split.id}`;

  const [checkedDays, setCheckedDays] = useLocalStorage(storageKey, {});

  useEffect(() => {
    // Si cambia la rutina, inicializar días si no existen
    const initialState = {};
    split.days.forEach((day) => {
      if (!(day.id in checkedDays)) {
        initialState[day.id] = false;
      }
    });

    if (Object.keys(initialState).length > 0) {
      setCheckedDays((prev) => ({ ...initialState, ...prev }));
    }
  }, [split]);

  const toggleDay = (dayId) => {
    setCheckedDays({
      ...checkedDays,
      [dayId]: !checkedDays[dayId],
    });
  };

  const completedCount = Object.values(checkedDays).filter(Boolean).length;

  return (
    <div className="weekly-checklist">
      <h3 className="section-title">Checklist semanal</h3>

      <div className="checklist-progress">
        {completedCount} / {split.days.length} días completados
      </div>

      <ul className="checklist-list">
        {split.days.map((day, index) => (
          <li
            key={day.id}
            className={`checklist-item ${
              checkedDays[day.id] ? "done" : ""
            }`}
            onClick={() => toggleDay(day.id)}
          >
            <span className="check-day">
              Día {index + 1}: {day.name}
            </span>
            <span className="check-status">
              {checkedDays[day.id] ? "✅" : "⬜"}
            </span>
          </li>
        ))}
      </ul>

      <button
        className="reset-btn"
        onClick={() => setCheckedDays({})}
      >
        Reiniciar semana
      </button>
    </div>
  );
}
