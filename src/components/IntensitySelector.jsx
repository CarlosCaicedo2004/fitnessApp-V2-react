export default function IntensitySelector({ levels, value, onChange }) {
  return (
    <div className="intensity-selector">
      <h3 className="section-title">Intensidad del día</h3>

      <div className="intensity-options">
        {levels.map((level) => (
          <button
            key={level.id}
            className={`intensity-btn ${
              value === level.id ? "active" : ""
            }`}
            style={{
              borderColor: level.color,
              background:
                value === level.id ? level.color : "transparent",
            }}
            onClick={() => onChange(level.id)}
          >
            <span className="intensity-label">{level.label}</span>
            <small className="intensity-desc">
              {level.description}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}
