import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

/* dispacth es para hacer algo y actualizar y llamar y Selector  para poder traer los datos del estado*/

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/react-rtk-crud" element={<TaskList />} />
            <Route path="react-rtk-crud/create-task" element={<TaskForm />} />
            <Route path="/react-rtk-crud/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
