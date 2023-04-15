/* esta carpeta Slice es lo que tendra todas las funciones del CRUD como eliminar,modificar,crear y eliminar */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    complete: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    complete: false,
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    /* recibe 2 parametros es estado y su accion */
    addTask: (state, action) => {
      /* asi que apra agregar agrero en el arreglo de estados, lo que recibe .payload que es el cuerpo qeu necesito */
      /* se supone que reactno quiere usar push en un arreglo porque se supone todo es inmutable pero redux toolkit lo permite permite para simplificar */
      state.push(action.payload);
    },

    editTask: (state, action) => {
      /* destructuro el task que tiene de action */
      const { id, title, description } = action.payload;

      /* y reguardamos para editarlo */
      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
