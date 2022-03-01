import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Redux Class</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
