import { useState } from 'react';
import './App.css';

function App() {
  const [draft, setDraft] = useState("");
  const [todos, setTodos] = useState([]);

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

    setTodos([...todos, text]);
    setDraft("");
  }

  function handleRemove(textToRemove) {
  const kvar = todos.filter(function (todo) {
    return todo !== textToRemove;
  });
  setTodos(kvar);
}

  return (
    <>
      <main>
 
        <h1>Todos</h1>

        <p>
          Antal produckter: <span className="count">{todos.length}</span>
        </p>

        <div className="card">
          <ul>
            {todos.map((todo) => (
              <li >{todo}<button type="button" onClick={function () { handleRemove(todo); }}>Ta bort</button></li>
                
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
    </>
  );
}

export default App;
