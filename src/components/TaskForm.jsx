import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
/* es un hook */ /* usamos el useSelector para traer las tareas */
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/taskSlice";

/* uuid */
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispacth = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispacth(editTask(task));
      navigate("/");
    } else {
      dispacth(
        addTask({
          ...task,
          id: uuid(),
        })
      );
      navigate("/");
    }
  };

  /* cuando cargue la pagian verifica si hay params */
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id,tasks]);
  return (
    <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
      <label className="block text-xs font-bold mb-2" htmlFor="title"> Task:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />

      <label className="block text-xs font-bold mb-2" htmlFor="description"> Task:</label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>

      <button className="bg-indigo-600 px-2 py-1" type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
