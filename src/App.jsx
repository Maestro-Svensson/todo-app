import { useState } from 'react';
import './App.css';

function App() {
  const [draft, setDraft] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Städa" },
    { id: 2, text: "Diska" },
    { id: 3, text: "Dammsuga" },
    { id: 4, text: "Torka golv" }
  ]);

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
    setTodos([]);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text }
    ]);

    setDraft("");
  }

  function handleRemove(idToRemove) {
    setTodos(todos.filter(todo => todo.id !== idToRemove));
  }

  
  const filtered = todos.filter(todo =>
    todo.text.toLowerCase().includes(draft.toLowerCase())
  );

  return (
    <main>
      <h1>Todos</h1>

      <p>
        Antal produkter: <span className="count">{todos.length}</span>
      </p>

      <div className="card">
        <ul>
          {filtered.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button
                className="delete-button"
                onClick={() => handleRemove(todo.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          value={draft}
          onChange={handleChange}
          placeholder="Skriv uppgift..."
        />
      </div>

      <p>Kladd just nu: {draft}</p>

      <button className="add-button" onClick={handleAdd}>Lägg till</button>
      <button className="clear-button" onClick={handleClear}>Rensa</button>
    </main>
  );
}

export default App;
