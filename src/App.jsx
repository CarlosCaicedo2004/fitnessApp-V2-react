import { useState, useEffect } from "react";

// DATA
import { splits } from "./data/splits";
import { exercises } from "./data/exercises";
import { intensityLevels } from "./data/intensity";

// COMPONENTS
import DaySelector from "./components/DaySelector";
import ExerciseList from "./components/ExerciseList";
import IntensitySelector from "./components/IntensitySelector";
import WeeklyChecklist from "./components/WeeklyChecklist";

// HOOK
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  // =========================
  // STATE
  // =========================
  const [selectedSplit, setSelectedSplit] = useLocalStorage(
    "selectedSplit",
    null
  );
  const [selectedDay, setSelectedDay] = useState(null);
  const [intensity, setIntensity] = useLocalStorage("intensity", "medium");

  // =========================
  // EFFECTS
  // =========================
  useEffect(() => {
    if (selectedSplit) {
      setSelectedDay(null); // resetear día al cambiar rutina
    }
  }, [selectedSplit]);

  // =========================
  // DERIVED DATA
  // =========================
  const currentSplit = splits.find(
    (split) => split.id === selectedSplit
  );

  const currentDay =
    currentSplit?.days.find((day) => day.id === selectedDay) || null;

  const exercisesForDay = currentDay
    ? exercises.filter((ex) =>
        currentDay.exercises.includes(ex.id)
      )
    : [];

  // =========================
  // RENDER
  // =========================
  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="app-header">
        <h1>💪 Fitness Routine App</h1>
        <p>Entrena con estructura, no al azar</p>
      </header>

      {/* SPLIT SELECTOR */}
      <section className="card">
        <h2>Selecciona tu rutina</h2>
        <div className="split-selector">
          {splits.map((split) => (
            <button
              key={split.id}
              className={`split-btn ${
                split.id === selectedSplit ? "active" : ""
              }`}
              onClick={() => setSelectedSplit(split.id)}
            >
              <h3>{split.name}</h3>
              <span>{split.days.length} días</span>
            </button>
          ))}
        </div>
      </section>

      {/* DAY SELECTOR */}
      {currentSplit && (
        <section className="card">
          <DaySelector
            days={currentSplit.days}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        </section>
      )}

      {/* INTENSITY */}
      {currentDay && (
        <section className="card">
          <IntensitySelector
            levels={intensityLevels}
            value={intensity}
            onChange={setIntensity}
          />
        </section>
      )}

      {/* EXERCISES */}
      {currentDay && (
        <section className="card">
          <h2>{currentDay.name}</h2>
          <ExerciseList
            exercises={exercisesForDay}
            intensity={intensity}
          />
        </section>
      )}

      {/* WEEKLY CHECKLIST */}
      {currentSplit && (
        <section className="card">
          <WeeklyChecklist split={currentSplit} />
        </section>
      )}

      {/* FOOTER */}
      <footer className="app-footer">
        <span>🏋️ Progreso y  Motivación</span>
      </footer>
    </div>
  );
}
