import "./App.css";
import TodoList from "./components/TodoList";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="todo-app">
      <Toaster position="top-right" />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/todos" element={<TodoList />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
