import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  /* aqui traigo los stados exportador en features  */
  const stateTasks = useSelector((state) => state.tasks);
  console.log(stateTasks);
  const dispacth = useDispatch();

  const handleDelete = (id) => {
    dispacth(deleteTask(id));
  };
  return (
    <div className="w-4/6 ">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {stateTasks.length}</h1>
        <Link
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          to="create-task"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {stateTasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
              <Link className="bg-zinc-600 px-2 py-1 text-xs rounded-md"  to={`/react-rtk-crud/edit-task/${task.id}`}>Edit</Link>
              <button className="bg-red-500 px-2 py-1 text-xs rounded-md"   onClick={() => handleDelete(task.id)}  >Delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
