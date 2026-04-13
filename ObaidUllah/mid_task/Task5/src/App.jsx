import { useState } from "react";
import "./App.css";

// ── Counter Component ──────────────────────────────────
// Demonstrates React useState hook with increment,
// decrement, reset actions and click history tracking.
// ──────────────────────────────────────────────────────

function Counter() {
  // useState hook: count state variable, initialised to 0
  const [count, setCount] = useState(0);

  // History keeps the last actions for display
  const [history, setHistory] = useState([]);

  // ── Arrow functions for each action ──
  const increment = () => {
    const next = count + 1;
    setCount(next);
    setHistory((prev) => [...prev, { action: "+1", value: next }]);
  };

  const decrement = () => {
    const next = count - 1;
    setCount(next);
    setHistory((prev) => [...prev, { action: "-1", value: next }]);
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  // Dynamic colour of the counter value
  const valueColor =
    count > 0 ? "#10b981" : count < 0 ? "#ef4444" : "#94a3b8";

  return (
    <div className="counter-card">
      <p className="counter-label">Counter Value</p>

      {/* Displays current count — re-renders on every state change */}
      <div className="counter-value" style={{ color: valueColor }}>
        {count}
      </div>

      {/* Action buttons */}
      <div className="btn-row">
        <button className="btn btn-dec" onClick={decrement}>
          − Decrement
        </button>
        <button className="btn btn-inc" onClick={increment}>
          + Increment
        </button>
      </div>

      <button className="btn btn-reset" onClick={reset}>
        Reset to 0
      </button>

      {/* State badge — shows current useState value */}
      <div className="state-badge">
        <span className="state-key">useState:</span> count ={" "}
        <span className="state-val">{count}</span>
      </div>

      {/* Click history — last 5 actions */}
      {history.length > 0 && (
        <div className="history">
          <div className="history-title">History (last 5 clicks)</div>
          {history.slice(-5).map((entry, i) => (
            <div key={i} className="history-item">
              <span className="history-action">{entry.action}</span>
              <span className="history-arrow">→</span>
              <span
                className="history-val"
                style={{
                  color:
                    entry.value > 0
                      ? "#10b981"
                      : entry.value < 0
                      ? "#ef4444"
                      : "#94a3b8",
                }}
              >
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── App root ───────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span className="badge">Mid Task 5</span>
        <h1 className="app-title">React State Management</h1>
        <p className="app-sub">
          useState hook · Increment · Decrement · Reset
        </p>
      </header>

      <main className="app-main">
        <Counter />

        {/* Code explanation card */}
        <div className="code-card">
          <h2 className="code-heading">How useState Works</h2>
          <pre className="code-block">{`import { useState } from "react";

function Counter() {
  // Declare state variable with initial value 0
  const [count, setCount] = useState(0);

  // Arrow functions update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset     = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}</pre>
        </div>
      </main>

      <footer className="app-footer">
        ObaidUllah · Mid-Semester Assignment · Task 5
      </footer>
    </div>
  );
}
